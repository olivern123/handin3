namespace SpriteKind {
    export const villager1 = SpriteKind.create()
    export const npc1 = SpriteKind.create()
    export const edibleFood1 = SpriteKind.create()
    export const infoSkilt = SpriteKind.create()
    export const npc2 = SpriteKind.create()
    export const nonEdiblefood = SpriteKind.create()
    export const npc3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.infoSkilt, function (sprite, otherSprite) {
    info2.sayText("A = YES | B = NO", 500, false)
})
function Villager1 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        bot1 = sprites.create(img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 d b b d 5 5 5 f . 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `, SpriteKind.npc1)
        tiles.placeOnTile(bot1, value)
        tiles.setTileAt(value, sprites.castle.tilePath5)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc3, function (sprite, otherSprite) {
    bot3.sayText("Can i drink this milk?", 1000, false)
    if (controller.A.isPressed()) {
        info.changeScoreBy(-1)
        mainChar.sayText("Yes, its drinkable", 1000, false)
        bot3.destroy()
        food3.destroy()
    }
    if (controller.B.isPressed()) {
        info.changeScoreBy(1)
        mainChar.sayText("No, its not drinkable", 1000, false)
        bot3.destroy()
        food3.destroy()
    }
})
function mad2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        Food2 = sprites.create(img`
            ..77...7...ccccc66676.......7...
            ..7....7ccc7444444744666....77..
            ..7...c7444744444b74444466...77.
            ...7.cb7444774444b77444444b...7.
            ....7b4744b5774444b77744444b..7.
            ...e7744744b47444444477444446.7.
            ..eb67b474444774bb444b7b4444467.
            ..e6b75b77444474b5b444744bb447..
            .e66b7b4474444474b4447744b5774e.
            .e6bb474474444474444474444b744e.
            eb66b47447bb444744447744444744be
            eb66bb74475b447744477b44444744be
            fb7667447b7447744477b5b4477774bf
            fcb777b47447744444744bb477747bcf
            .fb77777b44477774477444477444bf.
            .ef7b67777777444777777777444bfe.
            .867cb76666677744444777444bcc688
            8777ef7cbbbb77b77777777bcfc22778
            87727272ccccc7cccccccccc22226678
            f866777222222272222222222276686f
            fef866777766667777776667777fffef
            f7ff877768f86777777666776fffffbf
            f77ffee7ffeff7766688effeee7feb6f
            f6777fe7feeeeeeeeeeeeefee77eb77e
            f66d77ff7fe777777777777f7eed776e
            .c66dd777f7ffffeeeeef7774dd776e.
            .fc6b4d77777777777777dddd7744ee.
            ..ff6bb477747774444444447744ee..
            ....ffbbbb4444477777777774ee....
            ......ffeb7777777777774eee......
            .........fffffffcccccee.........
            ................................
            `, SpriteKind.nonEdiblefood)
        Food2.setScale(0.5, ScaleAnchor.Middle)
        tiles.placeOnTile(Food2, value)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc1, function (sprite, otherSprite) {
    bot1.sayText("Is this apple eddible?", 1000, false)
    if (controller.A.isPressed()) {
        info.changeScoreBy(1)
        mainChar.sayText("Yes, it's edible", 1000, false)
        bot1.destroy()
        Food1.destroy()
    }
    if (controller.B.isPressed()) {
        info.changeScoreBy(-1)
        mainChar.sayText("No, it's not edible", 1000, false)
        bot1.destroy()
        Food1.destroy()
    }
})
function Villager2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        bot2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.npc2)
        tiles.placeOnTile(bot2, value)
        tiles.setTileAt(value, sprites.castle.tilePath5)
    }
}
function mad3 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        food3 = sprites.create(img`
            ................................
            ................................
            ................................
            ....f...........................
            .....ff.......7......7......ff..
            ....f..f......7......77....f..f.
            ....f..f......7.......7....f..f.
            .....ff2f.....7.......7...f2ff..
            .......ff....77......77...ff....
            ..........7..7....ff.7..........
            ..........77.77.ffdf.7..........
            ...........7..7.fdfdf...........
            ...........7...ffffddf..........
            ...........7...fbbfddbf.........
            ..........77..fffbfbbfdf........
            ..........7..fdddffbfddf........
            ..........77.fdddbffdddf........
            ...........7.fddbbfbdfdf........
            ...........7.fd55bfbfddf........
            ..........77.fd55bfbdddf........
            ..........7..fd55bfbbdff........
            .............fd5bbfbffdf........
            ............ffddbbfbbbdf........
            ...........f11fdbbfbfff.........
            ..........f111ffdbff............
            ..........ff11f.ff..............
            ............ff..................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.nonEdiblefood)
        tiles.placeOnTile(food3, value)
    }
}
function Villager3 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        bot3 = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.npc3)
        tiles.placeOnTile(bot3, value)
        tiles.setTileAt(value, sprites.castle.tilePath5)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc2, function (sprite, otherSprite) {
    bot2.sayText("Can i eat this burger?", 1000, false)
    if (controller.A.isPressed()) {
        info.changeScoreBy(-1)
        mainChar.sayText("Yes, it's edible", 1000, false)
        bot2.destroy()
        Food2.destroy()
    }
    if (controller.B.isPressed()) {
        info.changeScoreBy(1)
        mainChar.sayText("No, it's not edible", 1000, false)
        bot2.destroy()
        Food2.destroy()
    }
})
function mad1 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        Food1 = sprites.create(img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, SpriteKind.edibleFood1)
        tiles.placeOnTile(Food1, value)
    }
}
let bot2: Sprite = null
let Food1: Sprite = null
let Food2: Sprite = null
let food3: Sprite = null
let bot3: Sprite = null
let bot1: Sprite = null
let info2: Sprite = null
let mainChar: Sprite = null
mainChar = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mainChar)
scene.cameraFollowSprite(mainChar)
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(0)
Villager1()
Villager2()
Villager3()
mad1()
mad2()
mad3()
info2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . f e e e e e e e e e f . . . 
    . . f e f f f e f e f e f . . . 
    . . f e e e e f e e e e f . . . 
    . . . f f f e e e f f f . . . . 
    . . . . . . f e f . . . . . . . 
    . . . . . . f e f . . . . . . . 
    . . . . . . f e f . . . . . . . 
    . . . . . . f e f . . . . . . . 
    . . . . . . f e f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.infoSkilt)
