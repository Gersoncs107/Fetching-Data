import { useCallback, useState } from "react";

function CandyDispenser() {
    const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']
    const [candies, setCandies] = useState(initialCandies)

    const dispense = (candy) => {
        setCandies(allCandies => allCandies.filter())
    }
}