const formatValue = (value: string) => Number(value.replace(/ /g, '').replace(',', '.'));

const verifyCheaperBeer = (beerA: any, beerB: any) => {
  const beerA_volume = formatValue(beerA.volume);
  const beerA_value = formatValue(beerA.value);

  const beerB_volume = formatValue(beerB.volume);
  const beerB_value = formatValue(beerB.value);

  const beerA_cost = beerA_value / beerA_volume;
  const beerB_cost = beerB_value / beerB_volume;

  if (beerA_cost < beerB_cost)
    return `${beerA.name} é mais barata.`;

  if (beerB_cost < beerA_cost)
    return `${beerB.name} é mais barata`;

  if (beerB_cost === beerA_cost)
    return 'As duas cervejas tem o mesmo preço';
};

export { verifyCheaperBeer };
