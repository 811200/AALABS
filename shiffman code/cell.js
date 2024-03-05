class Cell {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.visited = false;
    this.walls = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
  }

  markVisited() {
    this.visited = true;
  }
}
      currentCell.walls.left = false;
      neighborCell.walls.right = false;
    else if (colDiff === -1) {
      currentCell.walls.right = false;
      neighborCell.walls.left = false;
    }
  

