function getSort({ target }) {
  const order = (target.dataset.order = -(target.dataset.order || -1));

  const thList = Array.from(target.parentNode.cells);

  const index = thList.indexOf(target);

  const collator = new Intl.Collator(["en", "ru"], { numeric: true });

  const comparator = (index, order) => (a, b) => {
    return (
      order * collator.compare(a.children[index].textContent, b.children[index].textContent)
    );
  };

  const tablesBodies = Array.from(target.closest("table").tBodies);

  tablesBodies.forEach(tBody => {
    tBody.append(...Array.from(tBody.rows).sort(comparator(index, order)));
  });

  thList.forEach(th => th.classList.toggle("sorted", th === target));
}

export default getSort