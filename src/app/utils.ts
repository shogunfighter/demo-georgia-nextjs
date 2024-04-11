// got this code here: https://stackoverflow.com/questions/11591854/format-date-to-mm-dd-yyyy-in-javascript
export const getFormattedDate = (date: Date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
}