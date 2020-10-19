module.exports =
    function toReadable(num) {
        let res = '';
        let nums = [
            'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
            'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];

        // zero
        if (num === 0) {
            res = nums[0];
        }

        // hundreds
        if (num >= 100) {
            res = nums[Math.floor(num / 100)] + " hundred";
            num %= 100;
        }

        // tens
        if (num > 20 && num !== 0) {
            if (res) res += ' ';
            res += nums[Math.floor(num / 10 + 18)];
            num %= 10;
        }

        // units
        if (num <= 20 && num !== 0) {
            if (res) res += ' ';
            res += nums[num];
        }

        return res;
    }
