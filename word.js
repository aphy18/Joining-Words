function joinList(arr, seperation = " ") {
    let result = ""
    if (arr.length === 0) {
        return [];
    }

    else {
        for (let i = 0; i < arr.length; i++) {
            if (result) {
                result += seperation
            }

            result += arr[i] + ','

        }
    }
    return `Today I learned about ${result}`

}