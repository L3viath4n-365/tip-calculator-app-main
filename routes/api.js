import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.render('index', {
            bill: '',
            people: '',
            percentage: '',
            customPercentage: '',
            tipAmount: '0.00',
            total: '0.00'
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', (req, res, next) => {
    try {
        const { bill, percentage, customPercentage, people } = req.body;
        const billValue = Number.parseFloat(bill);
        const peopleValue = Number.parseInt(people, 10);
        const percentageValue = customPercentage === ''
            ? Number.parseFloat(percentage)
            : Number.parseFloat(customPercentage) / 100;

        const checker = [
            !Number.isFinite(billValue),
            billValue < 0,
            !Number.isFinite(peopleValue),
            peopleValue <= 0,
            !Number.isFinite(percentageValue),
            percentageValue < 0
        ].some(condition => condition === true);

        if (checker) {
            return res.render('index', {
                bill,
                people,
                percentage,
                customPercentage,
                tipAmount: '0.00',
                total: '0.00',
                error: 'Please enter valid values.'
            });
        }

        const totalTip = billValue * percentageValue;
        const tipAmount = totalTip / peopleValue;
        const total = (billValue + totalTip) / peopleValue;

        res.render('index', {
            bill,
            people,
            percentage,
            customPercentage,
            tipAmount: tipAmount.toFixed(2),
            total: total.toFixed(2)
        });

    } catch (err) {
        next(err)
    }
})

export default router;