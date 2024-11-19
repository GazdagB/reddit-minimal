export function createUpvoteString(upvotesNumber) {
    if (upvotesNumber >= 1000000) {
        // Format for numbers >= 1 million
        return `${(upvotesNumber / 1000000).toFixed(1)}M`;
    } else if (upvotesNumber >= 1000) {
        // Format for numbers >= 1 thousand
        return `${(upvotesNumber / 1000).toFixed(1)}K`;
    } else {
        // For numbers less than 1000
        return upvotesNumber.toString();
    }
}
