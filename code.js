function convertToAdjList(adjMatrix) {
    adjList = [];
    for(row = 0; row < adjMatrix.length; row++) {
        adjList[row] = [];
        for (column = 0; column < adjMatrix.length; column++) {
            if (adjMatrix[row][column] == 1) {
                adjList[row].push(column);
            }
        }
    }
    return adjList;
}
