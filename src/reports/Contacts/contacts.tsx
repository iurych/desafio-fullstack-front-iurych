import pdfMake from 'pdfmake/build/pdfmake';
import pdfFontes from 'pdfmake/build/vfs_fonts';
import { tContact } from '../../providers/ContactContext';

export const ContactsPDF = (contacts: tContact[]) => {
  pdfMake.vfs = pdfFontes.pdfMake.vfs;

  const dados = contacts.map((contact) => {
    return [
      { text: contact.fullName, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: contact.email, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: contact.registeredAt, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: contact.phoneNumber, fontSize: 9, margin: [0, 2, 0, 2] },
    ];
  });

  const reportTitle: Array<object> = [
    {
      text: 'Relatório de Contatos ',
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45],
    },
  ];

  const details: Array<object> = [
    {
      table: {
        HeaderRows: 1,
        widthd: ['*', '*', '*', '*'],
        body: [
          [
            { text: 'Nome', style: 'tableHeader', fontSize: 10 },
            { text: 'Email', style: 'tableHeader', fontSize: 10 },
            { text: 'Data de registro', style: 'tableHeader', fontSize: 10 },
            { text: 'Telefone', style: 'tableHeader', fontSize: 10 },
          ],
          ...dados,
        ],
      },
      layout: 'headerLineOnly',
    },
  ];
  const rodape = (currentPage: number, pageCount: number): object => {
    return [
      {
        text: currentPage + '/' + pageCount,
        alignment: 'right',
        fontSize: 9,
        margin: [0, 10, 20, 0],
      },
    ];
  };

 

  interface iDocDefinations {
    pageSize: string;
    pageMargins: number[];
    header: Array<object>;
    content: Array<object>;
    footer: typeof rodape;
  }

  const docDefinations: iDocDefinations = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    header: [reportTitle],
    content: [details],
    footer: () => Array<object>,
  };

  pdfMake.createPdf(docDefinations).download();
};
