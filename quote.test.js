const quote = require("./quote")

const testCases = [
    {
        scenario: "Sunny Day Scenario",
        car_value: 7530,
        risk_rating: 2,
        expected: {
            "monthly_premium": 12.55,
            "yearly_premium": 150.6
        },
    },
    {
        scenario: "Risk rating is 0",
        car_value: 15300,
        risk_rating: 0,
        expected: "Risk rating must be between 1 and 5",
    },
    {
        scenario: "Risk rating is maximum 5",
        car_value: 8350,
        risk_rating: 6,
        expected: "Risk rating must be between 1 and 5",
    },
    {
        scenario: "Wrong type of data- risk_rating is a string",
        car_value: 6400,
        risk_rating: "three",
        expected: "Please enter numbers only",
    },
    {
        scenario: "Wrong type of data- car_value is a string",
        car_value: "six thousand",
        risk_rating: 2,
        expected: "Please ensure you are entering numerical numbers",
    },
    {
        scenario: "Car value is negative",
        car_value: -2000,
        risk_rating: 5,
        expected: "Car value must be a positive number",
    },
    {
        scenario: "Negative risk rating",
        car_value: 4700,
        risk_rating: -1,
        expected: "Risk rating must be between 1 and 5",
    },
    {
        scenario: "Missing value",
        // car_value: 4700,
        risk_rating: 5,
        expected: "Please enter a value for all fields",
    },
    {
        scenario: "Symbols in the input",
        car_value: "$8500",
        risk_rating: 3,
        expected: {
            "monthly_premium": 21.25,
            "yearly_premium": 255
        },
    },


]

describe("quote value tests", () => {
    testCases.map(testCase => {
        it(testCase.scenario, () => {
            const actual = quote(testCase.car_value, testCase.risk_rating)

            expect(actual).toStrictEqual(testCase.expected)
        })
    })
})








