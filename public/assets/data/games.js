var games = [
  {
    id: 'customgame',
    title: 'Add custom game',
    image: 'assets/images/add.png'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    url: 'https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/Rocket-League/index.html',
    image: 'https://www.softgozar.com/Image/Softwares/Thumbnail/Rocket_League_Anniversary_SoftGozar.com.png'
  },
  {
    id: 'cookieclicker2',
    title: 'Cookie Clicker 2',
    description: 'Cookie Clicker is an addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats. IF YOU WANT TO SAVE PRESS OPTIONS THEN PRESS SAVE OR IT WILL NOT SAVE! unless you wait 60 seconds.',
    url: 'https://games-online.io/game/cake-maker/',
    image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
  },
  {
    id: 'cookieclicker',
    title: 'Cookie Clicker ',
    description: 'Cookie Clicker is an addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats. IF YOU WANT TO SAVE PRESS OPTIONS THEN PRESS SAVE OR IT WILL NOT SAVE! unless you wait 60 seconds.',
    url: 'https://pisaucer.github.io/boredhtml/games/cookieclicker/',
    image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
  },
  {
    id: 'thereisnogame',
    title: 'There Is No Game',
    url: 'https://pisaucer.github.io/boredhtml/games/thereisnogame/repo/alternate/871000/test.html',
    image: 'https://play-lh.googleusercontent.com/a6DfrYUL6viV0LAZFplqqA44gE0LHE0PyDnKHgdlydiUvccwzSBWrmRQSx5cjdL74Us=w240-h480-rw'
  },
  {
    id: 'fbwg',
    title: 'Fireboy and Watergirl',
    description: 'A 2 player game where you have to work together using logic and teamwork to get to the finish line.',
    url: 'https://www.friv.com/z/games/fireboyandwatergirlforest/index-x.html',
    image: 'https://play-lh.googleusercontent.com/5-YcjiTyMrPJEZe078dHMxnCxcg2A_8NWJZQieRvn2Gkf8JOuHZEbTmFyQ9gn5p2lnU'
  },
  {
    id: 'driftboss',
    title: 'Drift Boss',
    image: 'https://play-lh.googleusercontent.com/fLrnXuD1B0w6FEDJ1UKmv_TYbNyJ4GwzsQu9ltx57MfIj037nig4cVunG3CYmczkjMDA',
    url: 'https://frogiesarcade.win/stuff/selfhosted/drift-boss/'
  },
  {
    id: 'cuttherope',
    title: 'Cut the Rope',
    url: 'https://games.cdn.famobi.com/html5games/c/cut-the-rope/v100/?fg_domain=play.famobi.com&fg_aid=A-MYSTEINBACH&fg_uid=4531b37c-a8e0-4a67-9ebd-e8d3190b6277&fg_pid=78aa555f-8907-4158-8ca3-a4257bc1d34d&fg_beat=883&original_ref=https%3A%2F%2Fwww.mysteinbach.ca%2F',
    image: 'https://play-lh.googleusercontent.com/8FNcAyLXtQB_0Ux2ZO8VZoEoihL6a5VMBNf6V2lydRM24hXLnNUdlEup1d5miVjl3JY'
  },
  {
    id: 'tombofthemask',
    title: 'Tomb of the Mask',
    url: 'https://tomb-of-the-mask-online.github.io/file/',
    image: 'https://play-lh.googleusercontent.com/gTd127I81O2i2Q6kfCJoN-M0OSWmgsdjB47orUFpLwANW7VZLJYrOxMVt-OpilDXszg=w240-h480-rw'
  },
  {
    id: 'backrooms',
    title: 'Backrooms',
    description: 'Scary game based on the viral 4Chan post.',
    url: 'https://backroomsgame.io/game/backrooms/',
    image: 'https://media.wired.com/photos/627b0c1fb6048c47d506c6c0/1:1/w_679,h_679,c_limit/Backrooms-Games.jpg'
  },
  {
    id: 'papaburgers',
    title: 'Papa\'s Burgeria',
    url: 'https://papasgamesfree.io/play/papas-burgeria/',
    image: 'https://i.flipline.com/gamefiles/papasburgeriatogo/app_upsell_C.jpg'
  },
  {
    id: 'papasicecream',
    title: 'Papa\'s Scooperia',
    url: 'https://papa-s-scooperia.game-files.crazygames.com/ruffle/papasscooperia_v102.html?isNewUser=false&skipPrerollFirstSession=true&v=1.350',
    image: 'https://play-lh.googleusercontent.com/KpLBHo89bWG3jmuYb_KqDD1rZSY4XzXcHiMLZ1PCv83GMwVMcJluuuXrT32oQGCo51A'
  },
  {
    id: 'jetpackjoyride',
    title: 'Jetpack Joyride',
    url: 'https://abinbins.github.io/a7/jetpack-joyride/',
    image: 'https://cdn.jsdelivr.net/gh/mathlesson/mathlesson.github.io/jetpackjoyride.webp',
  },
  {
    id: 'plantsvszombies',
    title: 'Plants Versus Zombies 1.0',
    description: 'Plants Versus Zombies 1.0 is a tower defense video game where players strategically plant a variety of plants to fend off waves of zombie invaders.',
    url: 'https://glcdn.githack.com/kaioxdev/legacy-assets/-/raw/main/plants%20vs%20zombies%201/plants%20vs%20zombies.html',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/da/Plants_vs_Zombies_logo.png'
  },
  {
    id: 'happywheels',
    title: 'Happy Wheels',
    url: 'https://html5.gamedistribution.com/rvvASMiM/55084fdaacba49cbaeeead2464733b72/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2hhcHB5LXdoZWVscy5jby8iLCJwYXJlbnREb21haW4iOiJoYXBweS13aGVlbHMuY28iLCJ0b3BEb21haW4iOiJoYXBweS13aGVlbHMuY28iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9',
    image: 'https://play-lh.googleusercontent.com/SV8RsV5udSeeONjatT5SwleP6lzV6PjtNPs2VvyohJXWSG9fFLNOfslDEHbpDN337wQ'
  },
  {
    id: 'fnf',
    title: 'Friday Night Funkin',
    url: 'https://fnf.kdata1.com/2026/FNF/811/',
    image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=204,height=204,fit=cover,f=auto/0cd0c8bc4dc15c069dba7ccfb6809f6d/friday-night-funkin.png'
  },
  {
    id: 'paperio2',
    title: 'Paper.io 2',
    url: 'https://games.voodoo.io/paperio2',
    image: 'https://play-lh.googleusercontent.com/KxcjUrs8S75iOPnKBR2b-s7eGtqbREwLgzttVxaM9Znl5ZxsDCl6qEZHny4rBkMeYA=w240-h480-rw'
  },
  {
    id: 'impossiblequiz',
    title: 'The Impossible Quiz',
    url: 'https://the-impossible-quiz.game-files.crazygames.com/ruffle/theimpossiblequiz.html?isNewUser=false&v=1.350',
    image: 'https://ih1.redbubble.net/image.489460698.9522/st,small,507x507-pad,600x600,f8f8f8.jpg'
  },
  {
    id: 'littlealchemy',
    title: 'Little Alchemy',
    url: 'https://littlealchemy.com',
    image: 'https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-243364-52.jpg'
  },
  {
    id: 'templerun2',
    title: 'Temple Run 2',
    url: 'https://templerun-2.io/temple-run-2.embed',
    image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=204,height=204,fit=cover,f=auto/b5c8b617f65be7cc4d56dd3657590ae7/temple-run-2.png'
  },
  {
    id: 'stickmanhook',
    title: 'Stickman Hook',
    url: 'https://stickman-hook.bitbucket.io/file/',
    image: 'https://frogiesarcade.win/stuff/games/stickmanhook.jpg'
  },
  {
    id: 'sm64',
    title: 'Super Mario 64',
    url: 'https://super-mario-64.gitlab.io/file/',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Super_Mario_64.png/250px-Super_Mario_64.png',
    description: 'Controls: <br>Movement: Arrow Keys <br>A: X <br>B: C <br>R: Q <br>Z: Space <br>Start: Enter <br>C-stick: WASD<br><br>You might need to go into fullscreen for the keybinds to register'
  },
  {
    id: 'minecraft',
    title: 'Minecraft / Eaglercraft',
    url: 'https://eaglercraft.com/mc/1.8.8-wasm/?token=c81008a8-c61e-4c78-ae3c-f3b0d87b3841&version=1.8.8-wasm',
    image: 'https://cdn.iconscout.com/icon/free/png-256/minecraft-2752120-2284937.png'
  },
  {
    id: 'escapeprison',
    title: 'Henry Stickmin: Escaping the Prison',
    url: 'https://games.crazygames.com/en_US/escaping-the-prison/index.html?isNewUser=false&v=1.350',
    image: 'https://play-lh.googleusercontent.com/MKW0yzbpA-faDMztP2xkirlXsHwL7QutC_9VyQlbr4VTbPOyCZInL7zYG9EA4XpX4mtM'
  },
  {
    id: 'fleeingthecomplex',
    title: 'Henry Stickmin: Fleeing the Complex',
    url: 'https://art-class.github.io/assets/fleeingthecompound/index.html',
    image: 'https://play-lh.googleusercontent.com/RDk8BpHUESL9J4H-s-07ZC1sNJol8-aZEzz3OEA99PxTYnsZd8038Y-0wRMpCQKDssU'
  },
  {
    id: 'infiltratingtheairship',
    title: 'Henry Stickmin: Infiltrating the Airship',
    url: 'https://art-class.github.io/assets/infiltratingtheairship/index.html',
    image: 'https://play-lh.googleusercontent.com/bRVIDUSlmkDM9ZA9xLczm-PuUa0dYPupAG2ZVNXJvCITc3ZkO7PS-t0qKX1T--7f5-k=w240-h480-rw'
  },
  {
    id: 'breakingthebank',
    title: 'Henry Stickmin: Breaking the Bank',
    url: 'https://art-class.github.io/assets/breakingthebank/index.html',
    image: 'https://play-lh.googleusercontent.com/I9aDLwmiy5iSjeUPs5IDI3lam8iWZ1zVnLF-V_EGvClOLuccjwLNNjZ8xltu4AN60io'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://mathadventure1.github.io/slope/slope/index.html',
    image: 'https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs'
  },
  {
    id: 'baldisbasics',
    title: 'Baldi\'s Basics',
    url: 'https://kdata1.com/5000/2025/baldi-s-basics-webgl/',
    image: 'https://frogiesarcade.win/stuff/games/baldi.png'
  },
  {
    id: 'buildnowgg',
    title: "Buildnow.gg",
    url: 'https://soulpeacemind.com/games/buildnow-gg-gpotty/',
    image: 'https://play-lh.googleusercontent.com/MdtXwEOt43tY6GV3-IHAwhdmoW-jY4B1rqvA0m1Yj89Bj4et8FfWGL3cCt_lkDvWbWk'
  },
  {
    id: 'crossyroad',
    title: 'Crossy Road',
    url: 'https://azgames.io/game/crossy-road/',
    image: 'https://cdn.jim-nielsen.com/ios/512/crossy-road-endless-arcade-2014-12-02.png'
  },
  {
    id: 'monkeymart',
    title: 'Monkey Mart',
    url: 'https://monkeymarket.click/mm/',
    image: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/ce4a204b6d2cc99d1879da0b2282b0d8/monkey-mart.png'
  },
  {
    id: 'subwaysurfers',
    title: 'Subway Surfers',
    url: 'https://i.gamesgo.net/uploads/game/html5/25437/',
    image: 'https://cdnb.artstation.com/p/assets/images/images/040/799/939/large/celine-j-1-74-shanghai-icon-1024-x.jpg?1629908071'
  },
  {
    id: 'geometrydash',
    title: 'Geometry Dash',
    url: 'https://geometrylitegame.org/game/geometry-dash-lite/',
    image: 'https://frogiesarcade.win/stuff/games/geodash.png'
  },
  {
    id: 'geometrydashsubzero',
    title: 'Geometry Dash SubZero',
    url: 'https://geometry-dashsubzero.com/geometry-dash-subzero.embed',
    image: 'https://img.utdstc.com/icon/b78/b46/b78b4624b14ac389631cb2b7ee2579f583101fb8559c8a0c36f742a393da0e31:200'
  },
  {
    id: '8ballpool',
    title: '8 Ball Pool',
    url: 'https://8ball-pool.io',
    image: 'https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag'
  },
  {
    id: 'fruitninja',
    title: 'Fruit Ninja',
    url: 'https://www.coolmathgames.com/sites/default/files/public_games/50823/?gd_sdk_referrer_url=https%3A%2F%2Fwww.coolmathgames.com%2F0-fruit-ninja',
    image: 'https://play-lh.googleusercontent.com/eJ9OJnbRer1jjg5ZeNAnTXKcGd2B_NEqxCp2UsefcCABeFBaj_pNl_WKYBjup2GVGGc'
  },
  {
    id: 'bloxorz',
    title: 'Bloxorz',
    url: 'https://classroom8.github.io/bloxorz/',
    image: 'https://play-lh.googleusercontent.com/FHpA3r3FHDzVNtBpjpi9Zq8JA81bvRXBEbdkBvL3COOucsMfn_fYYhEFE5g55VkeSQ'
  },
  {
    id: 'basketballstars',
    title: 'Basketball Stars',
    url: 'https://basketball-stars.io/game/basketball-stars/',
    image: 'https://play-lh.googleusercontent.com/EjJV6kCXgX9EIhKEtpYhQF8-BUb5En8sDKpOPiWSQJUxv9_RAfl4tMxyIMkQYgeqC6I=w240-h480-rw'
  },
  {
    id: 'amongus',
    title: 'Among Us',
    url: 'https://amongusplay.online/',
    image: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
  },
  {
    id: 'curveball3d',
    title: 'Curve Ball 3D',
    url: 'https://www.coolmathgames.com/0-curve-ball-3d/play',
    image: 'https://play-lh.googleusercontent.com/sTHCFQc1HlSFK2jHNsQOabTeKBvgtugFxnSa_uNLWX2euDE7ohRnJhgCDapOZ0gvxlQ'
  },
  {
    id: 'bitlife',
    title: 'Bitlife',
    url: 'https://bitlifefree.io/elife-simulator/',
    image: 'https://d.newsweek.com/en/full/1317374/bitlife-ribbons-how-get-all-complete-list-android-ios-cheats-guide-tips-become.jpg?w=1600&h=1600&q=88&f=75befc746fb83a0c568c44ca07bc5e64'
  },
  {
    id: 'btd4',
    title: 'Bloons TD 4',
    url: 'https://games.crazygames.com/en_US/bloons-tower-defense-4/index.html?isNewUser=false&v=1.350',
    image: 'https://assets-prd.ignimgs.com/2022/08/16/bloons-td4-button-1660612386362.jpg'
  },
  {
    id: '2048',
    title: '2048',
    url: 'https://www.coolmathgames.com/0-2048/play',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
  },
  {
    id: 'holeio',
    title: 'Hole.io',
    url: 'https://holeonline.io/hole-io.embed',
    image: 'https://play-lh.googleusercontent.com/PTnoGeHV-bsIF79sW4IX4MzKAKaWj9fBWGvR4AOA4tmW0eYjPo3bVdpPYR7GGeX-0w'
  },
  {
    id: 'penguinio',
    title: "Penguin.io",
    url: 'https://penguins-io.com/',
    image: 'https://play-lh.googleusercontent.com/YsT4stD48fWw0XuIT87ilZtBfTkOGlxj3PpWI9qeFUkrvpu1xjemXzqf12DxBvv-Ikk'
  },
  {
    id: 'brawlguys',
    title: 'Brawl Guys',
    url: 'https://lagged.com/api/play2/brawlguys2/',
    image: 'https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg'
  }
]
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
var customGameId = "customgame"; // replace with the id of the game you want to pin
var customGame = games.find(function (game) {
  return game.id === customGameId;
});
games.splice(games.indexOf(customGame), 1);
games.unshift(customGame);

var customgames = getObj("customgames")
if (customgames) customgames.forEach(game => {
  games.push(game)
})

console.log("Loaded " + games.length + " games")
if (customgames) console.log("Loaded " + customgames.length + " custom games")