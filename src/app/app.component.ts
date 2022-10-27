import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Players } from '../interfaces/players.interface'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule],
})

export class AppComponent implements OnInit {

  Xplayer!: boolean
  squares!: (Players | undefined)[]
  winner!: Players | undefined
  winCombs: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

  newGame(): void {
    this.squares = [].constructor(9)
    this.Xplayer = !!Math.round(Math.random())
    this.winner = undefined
  }

  addMark(i: number): void {
    if (!this.squares[i]) {
      this.squares[i] = this.Xplayer ? 'X' : 'O'
      this.checkWin()
    }
  }

  checkWin(): void {
    this.winCombs.forEach(c => {
      if (this.squares[c[0]] && this.squares[c[0]] === this.squares[c[1]] && this.squares[c[1]] && this.squares[c[1]] === this.squares[c[2]]) {
        this.winner = this.squares[c[0]]
      }
    })

    if (!this.winner) {
      this.Xplayer = !this.Xplayer
    }
  }

  ngOnInit(): void {
    this.newGame()
  }

}
