export default function maskDate(date) {
   let year = date.getFullYear();
   let month = date.getMonth();
   let day = date.getDate().toString().padStart(2, '0');

   let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
   ];
 
   return monthNames[month] + ' ' + day + ', ' + year;
}
