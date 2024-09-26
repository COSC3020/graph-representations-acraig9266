function convertToAdjList(adjMatrix) {
    adjList = [];
    n = adjMatrix.length - 1;
    for(row = 0; row < adjMatrix.length; row++) {
        adjList[row] = [];
        for (column = 0; column < adjMatrix.length; column++) {
            if (adjMatrix[row][column] == 1) {
                list[row].push(column);
            }
        }
    }
    return adjList;
}
