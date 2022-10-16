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
};

const showAllLinesInConsole = (arrayOfBoxes) => {
    for (let i = 0; i < arrayOfBoxes.length; i++) {
        showLineInConsole(arrayOfBoxes[i]);
    }
};

const checkForNeighbours = (box) => {
    // example box: arrayOfBoxes[2][2]

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
            if (
                (cell1ToCheck = arrayOfBoxes[i].find(
                    (x) => x.id === box.id - 6
                )) !== undefined
            ) {
                cell1ToCheck = arrayOfBoxes[i].find((x) => x.id === box.id - 6);
                if (cell1ToCheck.status === 'alive') {
                    numberOfNeighbours++;
                }
            }

            if (
                (cell2ToCheck = arrayOfBoxes[i].find(
                    (x) => x.id === box.id - 5
                ))
            ) {
                cell2ToCheck = arrayOfBoxes[i].find((x) => x.id === box.id - 5);
                if (cell2ToCheck.status === 'alive') {
                    numberOfNeighbours++;
                }
            }

            if (
                (cell3ToCheck = arrayOfBoxes[i].find(
                    (x) => x.id === box.id - 4
                )) !== undefined
            ) {
                cell3ToCheck = arrayOfBoxes[i].find((x) => x.id === box.id - 4);
                if (cell3ToCheck.status === 'alive') {
                    numberOfNeighbours++;
                }
            }

            if (
                (cell4ToCheck = arrayOfBoxes[i].find(
                    (x) => x.id === box.id - 1
                )) !== undefined
            ) {
                cell4ToCheck = arrayOfBoxes[i].find((x) => x.id === box.id - 1);
                if (cell4ToCheck.status === 'alive') {
                    numberOfNeighbours++;
                }
            }

            if (
                (cell5ToCheck = arrayOfBoxes[i].find(
                    (x) => x.id === box.id + 1
                )) !== undefined
            ) {
                cell5ToCheck = arrayOfBoxes[i].find((x) => x.id === box.id + 1);
                if (cell5ToCheck.status === 'alive') {
                    numberOfNeighbours++;
                }
            }

            if (
                (cell6ToCheck = arrayOfBoxes[i].find(
                    (x) => x.id === box.id + 4
                )) !== undefined
            ) {
                cell6ToCheck = arrayOfBoxes[i].find((x) => x.id === box.id + 4);
                if (cell6ToCheck.status === 'alive') {
                    numberOfNeighbours++;
                }
            }

            if (
                (cell7ToCheck = arrayOfBoxes[i].find(
                    (x) => x.id === box.id + 5
                )) !== undefined
            ) {
                cell7ToCheck = arrayOfBoxes[i].find((x) => x.id === box.id + 5);
                if (cell7ToCheck.status === 'alive') {
                    numberOfNeighbours++;
                }
            }

            if (
                (cell8ToCheck = arrayOfBoxes[i].find(
                    (x) => x.id === box.id + 6
                )) !== undefined
            ) {
                cell8ToCheck = arrayOfBoxes[i].find((x) => x.id === box.id + 6);
                if (cell8ToCheck.status === 'alive') {
                    numberOfNeighbours++;
                }
            }

            if (!cell8ToCheck) {
                console.log('NO CELL 8 TO CHECK');
                console.log(cell8ToCheck?.status);
            }

            // {
            //     const currentBoxInArrayOfBoxesOnLine1 = arrayOfBoxes[0].find(
            //         (element) => element.id === box.id
            //     );

            //     console.log(numberOfNeighbours);

            //     const currentBoxInArrayOfBoxesOnLine2 = arrayOfBoxes[0].find(
            //         (element) => element.id === box.id
            //     );

            //     const currentBoxInArrayOfBoxesOnLine3 = arrayOfBoxes[0].find(
            //         (element) => element.id === box.id
            //     );

            //     const currentBoxInArrayOfBoxesOnLine4 = arrayOfBoxes[0].find(
            //         (element) => element.id === box.id
            //     );

            //     const currentBoxInArrayOfBoxesOnLine5 = arrayOfBoxes[0].find(
            //         (element) => element.id === box.id
            //     );
            // }
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

    // {
    //     for (let i = 0; i < arrayOfBoxes.length; i++) {
    //         for (let z = 0; arrayOfBoxes[i].length; z++) {
    //             console.log(arrayOfBoxes[i][z]);
    //             // if (numberOfNeighbours < 2) {
    //             //     arrayOfBoxes[i][z].status = 'dead';
    //             // }

    //             // if (numberOfNeighbours > 2) {
    //             //     arrayOfBoxes[i][z].status = 'dead';
    //             // }

    //             // if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
    //             //     arrayOfBoxes[i][z].status = 'alive';
    //             // }
    //         }
    //     }
    // }
};

const checkAllForNeighbours = () => {
    for (let i = 0; i < arrayOfBoxes.length; i++) {
        for (let z = 0; z < arrayOfBoxes[i].length; z++) {
            arrayOfBoxes[i][z].status = checkForNeighbours(arrayOfBoxes[i][z]);
        }
    }
    console.log('#####');
    showAllLinesInConsole(arrayOfBoxes);
    console.log(arrayOfBoxes);
};

showAllLinesInConsole(arrayOfBoxes);

checkAllForNeighbours();

setInterval(() => {
    checkAllForNeighbours();
}, 1000);
