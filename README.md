I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

function convertToAdjList(adjMatrix) {
    adjList = [];                                                     1
    for(row = 0; row < adjMatrix.length; row++) {                     n    loops once for each row in matrix
        adjList[row] = [];                                              1
        for (column = 0; column < adjMatrix.length; column++) {         n  loops once for each column in matrix, inside first loop so combine for them to be n<sup>2</sup>
                                                                           highest order is n<sup>2</sup>, rest can be ignored.
            if (adjMatrix[row][column] == 1) {                            1
                adjList[row].push(column);                                1
            }
        }
    }
    return adjList;                                                   1
}

T(n) = n<sup>2</sup>

T(n) ∈ Θ(n<sup>2</sup>)


## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
