import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import header from '../assets/header.png';
import footer from '../assets/footer.png';
import { CustomTh, CustomLink, CustomBlueButton } from '../styles/customStyles';

pdfMake.vfs = pdfFonts && pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : globalThis.pdfMake.vfs;

const generateSummaryTablePDF = (allFacultySummaries, session, dept) => {
  const facultyTotals = new Map();
  const rows = [];
  let sNo = 0;

  allFacultySummaries.forEach((facultyObj, index) => {
    const faculty = facultyObj.faculty;
    const summaryData = facultyObj.summaryData;

    // Initialize total hours for each faculty
    facultyTotals.set(faculty, 0);

    // Calculate total hours for each faculty based on the sum of 'count' values in summaryData
    const totalHrs = summaryData.reduce((total, summary) => total + (summary.count || 0), 0);
    facultyTotals.set(faculty, totalHrs);

    const facultyRows = summaryData.map((summary, subIndex) => {
      const isFirstRow = subIndex === 0;

      // Increment sNo only for the first row of each faculty
      sNo = isFirstRow ? sNo + 1 : sNo;

      const row = [
        { text: isFirstRow ? sNo : '', rowSpan: isFirstRow ? summaryData.length : 1, alignment: 'center' },
        { text: isFirstRow ? faculty : '', rowSpan: isFirstRow ? summaryData.length : 1 },
        { text: summary.subSem || '', alignment: 'center' },
        { text: summary.subCode || '', alignment: 'center' },
        { text: summary.subjectFullName || '', alignment: 'left' },
        { text: summary.subType || '', alignment: 'center' },
        { text: summary.count || 0, alignment: 'center' },
        { text: isFirstRow ? totalHrs : '', rowSpan: isFirstRow ? summaryData.length : 1, alignment: 'center' },
      ];

      return row;
    });

    rows.push(...facultyRows);
  });

  const headerImage = new Image();
  headerImage.src = header;

  headerImage.onload = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = headerImage.width;
    canvas.height = headerImage.height;
    context.drawImage(headerImage, 0, 0);
    const headerImageDataURL = canvas.toDataURL('image/png');

    const footerImage = new Image();
    footerImage.src = footer;

    footerImage.onload = () => {
      const footerCanvas = document.createElement('canvas');
      const footerContext = footerCanvas.getContext('2d');
      footerCanvas.width = footerImage.width;
      footerCanvas.height = footerImage.height;
      footerContext.drawImage(footerImage, 0, 0);
      const footerImageDataURL = footerCanvas.toDataURL('image/png');

      const docDefinition = {
        pageOrientation: 'landscape',
        header: {
          image: headerImageDataURL,
          width: 300,
          alignment: 'center',
        },
        footer: function (currentPage, pageCount) {
          // Draw a line at the bottom of each page
          return {
            canvas: [
              { type: 'line', x1: 40, y1: 780, x2: 560, y2: 780, lineWidth: 1, lineColor: 'black' },
            ],
          };
        },
        content: [
          {
            text: `Department of ${dept}`,
            fontSize: 12,
            bold: true,
            margin: [5, 0, 40, 0],
            alignment: 'center',
          },
          { text: '\n' },
          { text: `Faculty Load Allocation for the session ${session}`, alignment: 'center' },
          { text: '\n' },
          {
            table: {
              headerRows: 1,
              widths: [30, 150, '*', '*', '*', '*', 30, 50],
              alignment: 'center',
              body: [
                [
                  { text: 'S.No', alignment: 'center' },
                  { text: 'Faculty Name', alignment: 'center' },
                  { text: 'Semester', alignment: 'center' },
                  { text: 'Subject Code', alignment: 'center' },
                  { text: 'Subject Name', alignment: 'center' },
                  { text: 'Type', alignment: 'center' },
                  { text: 'Hrs', alignment: 'center' },
                  { text: 'Total Hrs', alignment: 'center' },
                ],
                ...rows,
              ],
            },
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            alignment: 'center',
          },
        },
      };

      pdfMake.createPdf(docDefinition).open();
    };
  };
};

export default generateSummaryTablePDF;
