const rating = require("./rating")

const testCases = [
    {
        scenario: "Sunny Day Scenario",
        claim_history: "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes.",
        expected: {
            "risk_rating": 3
        },
    },
    {
        scenario: "Empty Input",
        claim_history: "",
        expected: "Invalid input",
    },
    {
        scenario: "Number Input",
        claim_history: 3,
        expected: "Invalid input",
    },
    {
        scenario: "No claims",
        claim_history: "I have made no claims.",
        expected: {
            "risk_rating": 1
        },
    },

]

describe("risk rating tests", () => {
    testCases.map(testCase => {
        it(testCase.scenario, () => {
            const actual = rating(testCase.claim_history)

            expect(actual).toStrictEqual(testCase.expected)
        })
    })
})
