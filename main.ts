basic.showIcon(IconNames.Heart)
music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Yes)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showIcon(IconNames.SmallHeart)
music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Umbrella)
music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showIcon(IconNames.SmallSquare)
music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
