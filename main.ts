let cat = 2
let dog = 1
if (cat < dog) {
    music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000041e0000000400012508000c00012910001400012518001c000129200024000125`), music.PlaybackMode.UntilDone)
} else {
    music.play(music.createSong(hex`0078000408020102001c000c960064006d019001000478002c010000640032000000000a0600051e0000000400012908000c00011e10001400012918001c00011e200024000129`), music.PlaybackMode.UntilDone)
}
