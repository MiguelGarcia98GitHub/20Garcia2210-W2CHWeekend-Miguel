const arrayOfBoxes = [
    [
        { status: 'dead', j: 1, x: 1, id: 1 },
        { status: 'alive', j: 1, x: 2, id: 2 },
        { status: 'alive', j: 1, x: 3, id: 3 },
        { status: 'alive', j: 1, x: 4, id: 4 },
        { status: 'dead', j: 1, x: 5, id: 5 },
    ],
    [
        { status: 'dead', j: 2, x: 1, id: 6 },
        { status: 'alive', j: 2, x: 2, id: 7 },
        { status: 'alive', j: 2, x: 3, id: 8 },
        { status: 'dead', j: 2, x: 4, id: 9 },
        { status: 'dead', j: 2, x: 5, id: 10 },
    ],
    [
        { status: 'dead', j: 3, x: 1, id: 11 },
        { status: 'alive', j: 3, x: 2, id: 12 },
        { status: 'alive', j: 3, x: 3, id: 13 },
        { status: 'alive', j: 3, x: 4, id: 14 },
        { status: 'dead', j: 3, x: 5, id: 15 },
    ],
    [
        { status: 'dead', j: 4, x: 1, id: 16 },
        { status: 'alive', j: 4, x: 2, id: 17 },
        { status: 'alive', j: 4, x: 3, id: 18 },
        { status: 'alive', j: 4, x: 4, id: 19 },
        { status: 'alive', j: 4, x: 5, id: 20 },
    ],
    [
        { status: 'dead', j: 5, x: 1, id: 21 },
        { status: 'dead', j: 5, x: 2, id: 22 },
        { status: 'alive', j: 5, x: 3, id: 23 },
        { status: 'dead', j: 5, x: 4, id: 24 },
        { status: 'dead', j: 5, x: 5, id: 25 },
    ],
];

const showLineInConsole = (line) => {
    let lineDisplay = '';

    line.forEach((item) => {
        if (item.status === 'dead') {
            lineDisplay += '-';
        }
        if (item.status === 'alive') {
            lineDisplay += '*';
        }
    });
    console.log(lineDisplay);
    return lineDisplay;
};

showLineInConsole(arrayOfBoxes[0]);

const showAllLinesInConsole = (arrayOfBoxes) => {
    for (let i = 0; i < arrayOfBoxes.length; i++) {
        showLineInConsole(arrayOfBoxes[i]);
    }
};

const checkForNeighbours = (box) => {
    let numberOfNeighbours = 0;

    let cell1ToCheck;
    let cell2ToCheck;
    let cell3ToCheck;
    let cell4ToCheck;
    let cell5ToCheck;
    let cell6ToCheck;
    let cell7ToCheck;
    let cell8ToCheck;

    {
        for (let i = 0; i < arrayOfBoxes.length; i++) {
            if (box.j !== 1) {
                if (
                    (cell1ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id - 6
                    ))
                ) {
                    cell1ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id - 6
                    );
                    if (cell1ToCheck.status === 'alive') {
                        numberOfNeighbours++;
                    }
                }

                if (
                    (cell2ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id - 5
                    ))
                ) {
                    cell2ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id - 5
                    );
                    if (cell2ToCheck.status === 'alive') {
                        numberOfNeighbours++;
                    }
                }

                if (
                    (cell3ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id - 4
                    )) &&
                    box.id % 5 !== 0
                ) {
                    cell3ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id - 4
                    );
                    if (cell3ToCheck.status === 'alive') {
                        numberOfNeighbours++;
                    }
                }
            }

            if (box.x !== 1) {
                if (
                    (cell4ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id - 1
                    ))
                ) {
                    cell4ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id - 1
                    );
                    if (cell4ToCheck.status === 'alive') {
                        numberOfNeighbours++;
                    }
                }
            }

            if (box.x !== 5) {
                if (
                    (cell5ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id + 1
                    ))
                ) {
                    cell5ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id + 1
                    );
                    if (cell5ToCheck.status === 'alive') {
                        numberOfNeighbours++;
                    }
                }
            }

            if (box.j !== 5) {
                if (
                    (cell6ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id + 4
                    ))
                ) {
                    cell6ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id + 4
                    );
                    if (cell6ToCheck.status === 'alive') {
                        numberOfNeighbours++;
                    }
                }

                if (
                    (cell7ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id + 5
                    ))
                ) {
                    cell7ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id + 5
                    );
                    if (cell7ToCheck.status === 'alive') {
                        numberOfNeighbours++;
                    }
                }

                if (
                    (cell8ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id + 6
                    ))
                ) {
                    cell8ToCheck = arrayOfBoxes[i].find(
                        (x) => x.id === box.id + 6
                    );
                    if (cell8ToCheck.status === 'alive') {
                        numberOfNeighbours++;
                    }
                }
            }
        }

        {
            if (numberOfNeighbours < 2) {
                return 'dead';
            }

            if (numberOfNeighbours > 3) {
                return 'dead';
            }

            if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
                return 'alive';
            }
        }
    }
};

const checkAllForNeighbours = (currentGeneration) => {
    for (let i = 0; i < arrayOfBoxes.length; i++) {
        for (let z = 0; z < arrayOfBoxes[i].length; z++) {
            arrayOfBoxes[i][z].status = checkForNeighbours(arrayOfBoxes[i][z]);
        }
    }
    {
        console.log(`Generation number ${currentGeneration}`);
        showAllLinesInConsole(arrayOfBoxes);
    }
};

const startGame = () => {
    let currentGeneration = 0;

    setInterval(() => {
        currentGeneration++;
        checkAllForNeighbours(currentGeneration);
    }, 1000);
};

startGame();
