function acmTeam(topic) {
    let maxSubjects = 0;
    let teamCount = 0;

    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let knownSubjects = 0;

            for (let k = 0; k < topic[0].length; k++) {
                if (topic[i][k] === "1" || topic[j][k] === "1") {
                    knownSubjects++;
                }
            }

            if (knownSubjects > maxSubjects) {
                maxSubjects = knownSubjects;
                teamCount = 1;
            } else if (knownSubjects === maxSubjects) {
                teamCount++;
            }
        }
    }

    return [maxSubjects, teamCount];
}
