import uuid from 'uuid';

const staticData = [
  {
    id: uuid(),
    title: 'The Lost Symbol',
    author: 'Dan Brown',
    ISBN: '5353635435242',
    rating: 3.7,
    image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTtMh67lXaoGKNgmxQPmghJi0n1wjjIiiqyRlg9RG3IrwifLDe1',
  },
  {
    id: uuid(),
    title: 'Harry Potter & The Goblet of Fire',
    author: 'JK Rowling',
    ISBN: '56356352662562',
    rating: 4.6,
    image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRUDXtMgpLsu4_sUmRS4JiksXDWxGAFIcHoFbsgMoEfW5__GW7y',
  },
  {
    id: uuid(),
    title: 'The Fellowship of the Ring',
    author: 'J. R. R. Tolkien',
    ISBN: '5637627627662562',
    rating: 4.4,
    image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRVCT-I3sfy69onp63v8ZZ_Xp_riTmfmz6YnnrhQbFNnZMI3tTn',
  },
];

const staticResults = [
  {
    id: uuid(),
    title: 'The Lost Symbol',
    author: 'Dan Brown',
    ISBN: '5353635435242',
    rating: 3.7,
    image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTtMh67lXaoGKNgmxQPmghJi0n1wjjIiiqyRlg9RG3IrwifLDe1',
  },
  {
    id: uuid(),
    title: 'The Fellowship of the Ring',
    author: 'J. R. R. Tolkien',
    ISBN: '5637627627662562',
    rating: 4.4,
    image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRVCT-I3sfy69onp63v8ZZ_Xp_riTmfmz6YnnrhQbFNnZMI3tTn',
  },
  {
    id: uuid(),
    title: 'Harry Potter & The Goblet of Fire',
    author: 'JK Rowling',
    ISBN: '56356352662562',
    rating: 4.6,
    image: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRUDXtMgpLsu4_sUmRS4JiksXDWxGAFIcHoFbsgMoEfW5__GW7y',
  }
];

export { staticData, staticResults };