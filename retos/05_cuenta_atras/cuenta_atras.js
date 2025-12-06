// const takeoff = '2025*12*25@00|00|00 NP'
// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
// console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff))
// 30

// justo en el momento exacto
// console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff))
// 0

// 12 segundos después del despegue
// console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff))
// -12

/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
// function timeUntilTakeOff(fromTime, takeOffTime) {
  
//     const parseTime = (time) => {
//         const temp = time.replace('@',' ').replaceAll('*','-').replaceAll('|',':');
//         const t = temp.replace('NP','')
//         return new Date(t)
//     }

//     const f = parseTime(fromTime);
//     const t = parseTime(takeOffTime);

//     const diff = (t - f)/ 1000;

//     return diff
// } //4⭐

function timeUntilTakeOff(fromTime, takeOffTime) {
  
    const parseTime = (time) => {
        const temp = time.replace('@','T')
            .replaceAll('*','-')
            .replaceAll('|',':')
            .replace(' NP','Z');

        return new Date(temp)
    }

    const f = parseTime(fromTime);
    const t = parseTime(takeOffTime);

    const diff = Math.floor(t - f)/ 1000;

    return diff
} //5⭐

module.exports = timeUntilTakeOff