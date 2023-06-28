import provinces from "china-division/dist/provinces.json";
import cities from "china-division/dist/cities.json";
import areas from "china-division/dist/areas.json";

areas.forEach((item) => {
  //找到地区的城市编码等于城市的编码，也就是找到城市下属的各个地区
  const curCity = cities.find((city) => city.code == item.cityCode);
  if (curCity) {
    curCity.children = curCity.children || [];
    curCity.children.push({
      label: item.name,
      value: item.code
    });
  }
});

cities.forEach((item) => {
  //找到城市的省份编码等于省份的编码，也就是找到省份下属的各个城市
  const curProvince = provinces.find((p) => p.code == item.provinceCode);
  if (curProvince) {
    curProvince.children = curProvince.children || [];
    curProvince.children.push({
      label: item.name,
      value: item.code,
      children: item.children
    });
  }
});

const options = provinces.map((p) => ({
  label: p.name,
  value: p.code,
  children: p.children
}));

export default options;
