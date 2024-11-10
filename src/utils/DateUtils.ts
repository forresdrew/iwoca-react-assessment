// Extendable class of static methods for formatting and processing dates
class DateUtils {
  // Format date for display purposes
  public static formatDateYYYYMMDD = (dateString: string): string => {
    const date = new Date(dateString);
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return "Unknown";
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
}

export default DateUtils;
