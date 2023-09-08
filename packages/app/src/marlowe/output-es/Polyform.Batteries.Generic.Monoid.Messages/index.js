const notEmptyExpected = dictMonoid => {
  const mempty = dictMonoid.mempty;
  return dictShow => v => "Expecting value different than: " + dictShow.show(mempty) + ".";
};
const emptyExpected = dictMonoid => {
  const mempty = dictMonoid.mempty;
  return dictShow => a => "Expecting: " + dictShow.show(mempty) + " but got " + dictShow.show(a) + ".";
};
export {emptyExpected, notEmptyExpected};
