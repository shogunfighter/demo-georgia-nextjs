/**
 * got this code here: https://stackoverflow.com/questions/11591854/format-date-to-mm-dd-yyyy-in-javascript
 * 
 * Formats the date to MM/DD/YYYY
 * @param date 
 * @returns 
 */
export const getFormattedDate = (date: Date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
}

/**
 * Generate a serial number for the generated batch items \
 * We assume the serial number will have this format: YYYYMMDD + random numbers (having length of `serialLength`)
 * @client question, how do you prefer the serial number being formatted
 * 
 * @param serialLength 
 * @returns 
 */
export const generateSerialNumber = (serialLength: number): string => {
    const currentDate = new Date();
    const datePart = currentDate.toISOString().slice(0, 10).replace(/-/g, ''); // Format: YYYYMMDD

    // Generate random sequence of specified length
    let sequencePart = '';
    for (let i = 0; i < serialLength; i++) {
        sequencePart += Math.floor(Math.random() * 10);
    }

    return datePart + sequencePart;
}