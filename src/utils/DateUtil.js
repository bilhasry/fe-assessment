const DateUtil = {
    getCurrentDate() {
        return (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)    
    },
    inDateRange(needle, start, end) {
        let currentDate = new Date(needle)
        let startDate = new Date(start)
        let endDate = new Date(end)
        
        return currentDate >= startDate && currentDate <= endDate
    }
}

export default DateUtil;