
console.log(" ─── Start ─── ");

/* ─────────────── CTA: Data ─────────────── */

const heroList = [
    {'id': 'DaBa', 'index': 'D05', 'name': 'Bat', 'elem': 'Dark', 'class': 'Magician', 'rarity': 'Common', 'gender': 'Male', 'atk': 52, 'hp': 220, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 350, 'move': 250, 'resist': 0.18, 'aoe': 0, 'dmg': 59.8, 'sum': 90, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'DaCh', 'index': 'D09', 'name': 'Chaos', 'elem': 'Dark', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 80, 'hp': 440, 'def': 20, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 100, 'resist': 0.12, 'aoe': 150, 'dmg': 46, 'sum': 164, 'buffaffected': 'Dark', 'buffamount': 4, 'bufftarget': 'Def', },
    {'id': 'DaCi', 'index': 'D08', 'name': 'Circe', 'elem': 'Dark', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Female', 'atk': 50, 'hp': 250, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.5, 'range': 545, 'move': 160, 'resist': 0.3, 'aoe': 0, 'dmg': 27.5, 'sum': 87, 'buffaffected': 'Dark', 'buffamount': 4, 'bufftarget': 'HP', },
    {'id': 'DaDaHu', 'index': 'D12', 'name': 'Dark Hunter', 'elem': 'Dark', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Male', 'atk': 52, 'hp': 200, 'def': 6, 'critrate': 0.25, 'critdmg': 1, 'reload': 1, 'range': 590, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 65, 'sum': 84, 'buffaffected': 'AllEnemies', 'buffamount': -0.5, 'bufftarget': '-Atk', },
    {'id': 'DaDaKn', 'index': 'D06', 'name': 'Dark Knight', 'elem': 'Dark', 'class': 'Knight', 'rarity': 'Rare', 'gender': 'Male', 'atk': 70, 'hp': 320, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 120, 'resist': 0.1, 'aoe': 0, 'dmg': 77, 'sum': 132, 'buffaffected': 'AllEnemies', 'buffamount': -0.5, 'bufftarget': '-Def', },
    {'id': 'DaDaWo', 'index': 'D10', 'name': 'Dark Wolf', 'elem': 'Dark', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Male', 'atk': 45, 'hp': 400, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.56, 'range': 535, 'move': 100, 'resist': 0.22, 'aoe': 0, 'dmg': 27.72, 'sum': 105, 'buffaffected': 'AllEnemies', 'buffamount': -0.25, 'bufftarget': '-Move', },
    {'id': 'DaDrBo', 'index': 'D04', 'name': 'Dragon Bot', 'elem': 'Dark', 'class': 'Gunner', 'rarity': 'Common', 'gender': 'Male', 'atk': 44, 'hp': 280, 'def': 12, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 430, 'move': 150, 'resist': 0.25, 'aoe': 0, 'dmg': 50.6, 'sum': 96, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'DaKa', 'index': 'D07', 'name': 'Kage', 'elem': 'Dark', 'class': 'Samurai', 'rarity': 'Rare', 'gender': 'Male', 'atk': 75, 'hp': 260, 'def': 6, 'critrate': 0.25, 'critdmg': 2, 'reload': 1, 'range': 170, 'move': 150, 'resist': 0.08, 'aoe': 0, 'dmg': 112.5, 'sum': 113, 'buffaffected': 'AllEnemies', 'buffamount': -0.5, 'bufftarget': '-HP', },
    {'id': 'DaKs', 'index': 'D15', 'name': 'Kasumi', 'elem': 'Dark', 'class': 'Rogue', 'rarity': 'Epic', 'gender': 'Female', 'atk': 38, 'hp': 240, 'def': 8, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 220, 'resist': 0.1, 'aoe': 0, 'dmg': 45.6, 'sum': 78, 'buffaffected': 'AllEnemies', 'buffamount': -0.1, 'bufftarget': '-Reload', },
    {'id': 'DaMoMo', 'index': 'D13', 'name': 'Monki Mortar', 'elem': 'Dark', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 35, 'hp': 230, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 405, 'move': 170, 'resist': 0.1, 'aoe': 150, 'dmg': 31.955, 'sum': 70, 'buffaffected': 'Dark', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'DaNe', 'index': 'D17', 'name': 'Necromancer', 'elem': 'Dark', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Male', 'atk': 38, 'hp': 250, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 605, 'move': 130, 'resist': 0.23, 'aoe': 0, 'dmg': 28.006, 'sum': 93, 'buffaffected': 'Skeleton', 'buffamount': 2, 'bufftarget': 'AtkHPDef', },
    {'id': 'DaNk', 'index': 'D11', 'name': 'Neko', 'elem': 'Dark', 'class': 'Brawler', 'rarity': 'Rare', 'gender': 'Female', 'atk': 80, 'hp': 300, 'def': 20, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 175, 'move': 165, 'resist': 0.18, 'aoe': 0, 'dmg': 96, 'sum': 150, 'buffaffected': 'Dark', 'buffamount': 0.25, 'bufftarget': 'Move', },
    {'id': 'DaOn', 'index': 'D19', 'name': 'Onyx', 'elem': 'Dark', 'class': 'Lancer', 'rarity': 'Epic', 'gender': 'Female', 'atk': 54, 'hp': 300, 'def': 12, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.5, 'range': 250, 'move': 150, 'resist': 0.1, 'aoe': 350, 'dmg': 29.7, 'sum': 108, 'buffaffected': 'AllTeam', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'DaOr', 'index': 'D20', 'name': 'Ornok', 'elem': 'Dark', 'class': 'Knight', 'rarity': 'Legendary', 'gender': 'Male', 'atk': 64, 'hp': 500, 'def': 35, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 150, 'move': 110, 'resist': 0.2, 'aoe': 300, 'dmg': 58.432, 'sum': 184, 'buffaffected': 'AllTeam', 'buffamount': 3, 'bufftarget': 'Shield', },
    {'id': 'DaSkGi', 'index': 'D01', 'name': 'Skeleton Giant', 'elem': 'Dark', 'class': 'Barbarian', 'rarity': 'Common', 'gender': 'Male', 'atk': 45, 'hp': 380, 'def': 20, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 100, 'resist': 0.1, 'aoe': 350, 'dmg': 25.875, 'sum': 123, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'DaSkIn', 'index': 'D02', 'name': 'Skeleton Infantry', 'elem': 'Dark', 'class': 'Rogue', 'rarity': 'Common', 'gender': 'Male', 'atk': 30, 'hp': 300, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 160, 'move': 200, 'resist': 0.1, 'aoe': 0, 'dmg': 33, 'sum': 72, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'DaSkRa', 'index': 'D03', 'name': 'Skeleton Ranger', 'elem': 'Dark', 'class': 'Ranger', 'rarity': 'Common', 'gender': 'Male', 'atk': 30, 'hp': 200, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 455, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 33, 'sum': 62, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'DaSo', 'index': 'D14', 'name': 'Sorrow', 'elem': 'Dark', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Female', 'atk': 35, 'hp': 350, 'def': 16, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.5, 'range': 620, 'move': 180, 'resist': 0.08, 'aoe': 0, 'dmg': 21, 'sum': 102, 'buffaffected': 'Gunner', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'DaTr', 'index': 'D18', 'name': 'Trickster', 'elem': 'Dark', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Male', 'atk': 48, 'hp': 340, 'def': 10, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 510, 'move': 200, 'resist': 0.22, 'aoe': 0, 'dmg': 57.6, 'sum': 102, 'buffaffected': 'AllEnemies', 'buffamount': 0.06, 'bufftarget': 'DebuffTime', },
    {'id': 'DaVl', 'index': 'D16', 'name': 'Vlad', 'elem': 'Dark', 'class': 'Support', 'rarity': 'Epic', 'gender': 'Male', 'atk': 42, 'hp': 250, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 560, 'move': 160, 'resist': 0.3, 'aoe': 0, 'dmg': 46.2, 'sum': 79, 'buffaffected': 'AllEnemies', 'buffamount': -0.1, 'bufftarget': '-Reload', },
    {'id': 'FiAl', 'index': 'F17', 'name': 'Alda', 'elem': 'Fire', 'class': 'Ranger', 'rarity': 'Epic', 'gender': 'Female', 'atk': 38, 'hp': 240, 'def': 6, 'critrate': 0.25, 'critdmg': 1, 'reload': 1, 'range': 555, 'move': 150, 'resist': 0.06, 'aoe': 0, 'dmg': 47.5, 'sum': 74, 'buffaffected': 'AllTeam', 'buffamount': 3, 'bufftarget': 'CritDmg', },
    {'id': 'FiFiMo', 'index': 'F11', 'name': 'Fire Monk', 'elem': 'Fire', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Male', 'atk': 45, 'hp': 320, 'def': 8, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 510, 'move': 160, 'resist': 0.16, 'aoe': 0, 'dmg': 44.82, 'sum': 93, 'buffaffected': 'Fire', 'buffamount': 4, 'bufftarget': 'HP', },
    {'id': 'FiFu', 'index': 'F12', 'name': 'Furiosa', 'elem': 'Fire', 'class': 'Knight', 'rarity': 'Rare', 'gender': 'Female', 'atk': 60, 'hp': 340, 'def': 14, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 150, 'resist': 0.08, 'aoe': 0, 'dmg': 72, 'sum': 122, 'buffaffected': 'Fire', 'buffamount': 0.03, 'bufftarget': 'Frenzy', },
    {'id': 'FiJa', 'index': 'F05', 'name': 'Jasmine', 'elem': 'Fire', 'class': 'Rogue', 'rarity': 'Rare', 'gender': 'Female', 'atk': 45, 'hp': 240, 'def': 8, 'critrate': 0.3, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 200, 'resist': 0.06, 'aoe': 0, 'dmg': 58.5, 'sum': 85, 'buffaffected': 'Fire', 'buffamount': 2, 'bufftarget': 'CritDmg', },
    {'id': 'FiKa', 'index': 'F08', 'name': 'Kasai', 'elem': 'Fire', 'class': 'Samurai', 'rarity': 'Rare', 'gender': 'Male', 'atk': 62, 'hp': 220, 'def': 8, 'critrate': 0.3, 'critdmg': 2, 'reload': 1, 'range': 170, 'move': 150, 'resist': 0.04, 'aoe': 0, 'dmg': 99.2, 'sum': 100, 'buffaffected': 'Fire', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'FiMa', 'index': 'F14', 'name': 'Magmus', 'elem': 'Fire', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 65, 'hp': 520, 'def': 18, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 100, 'resist': 0.07, 'aoe': 150, 'dmg': 37.375, 'sum': 153, 'buffaffected': 'Fire', 'buffamount': 4, 'bufftarget': 'Def', },
    {'id': 'FiMeVa', 'index': 'F15', 'name': 'Mecha Valken', 'elem': 'Fire', 'class': 'Brawler', 'rarity': 'Rare', 'gender': 'Male', 'atk': 65, 'hp': 360, 'def': 20, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 180, 'move': 140, 'resist': 0.2, 'aoe': 300, 'dmg': 64.74, 'sum': 141, 'buffaffected': 'Fire', 'buffamount': 4, 'bufftarget': 'Def', },
    {'id': 'FiMoKi', 'index': 'F13', 'name': 'Monki King', 'elem': 'Fire', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Male', 'atk': 38, 'hp': 210, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 320, 'move': 180, 'resist': 0.14, 'aoe': 300, 'dmg': 43.7, 'sum': 75, 'buffaffected': 'Fire', 'buffamount': 0.1, 'bufftarget': 'Reload', },
    {'id': 'FiMoMe', 'index': 'F07', 'name': 'Monki Merry', 'elem': 'Fire', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Male', 'atk': 42, 'hp': 420, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 480, 'move': 140, 'resist': 0.16, 'aoe': 0, 'dmg': 38.346, 'sum': 104, 'buffaffected': 'AllTeam', 'buffamount': 0.06, 'bufftarget': 'Resist', },
    {'id': 'FiSc', 'index': 'F16', 'name': 'Scud', 'elem': 'Fire', 'class': 'Gunner', 'rarity': 'Epic', 'gender': 'Male', 'atk': 35, 'hp': 210, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.83, 'range': 400, 'move': 160, 'resist': 0.1, 'aoe': 150, 'dmg': 33.4075, 'sum': 72, 'buffaffected': 'AllTeam', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'FiSh', 'index': 'F20', 'name': 'Shelly', 'elem': 'Fire', 'class': 'Barbarian', 'rarity': 'Epic', 'gender': 'Female', 'atk': 55, 'hp': 700, 'def': 25, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.67, 'range': 170, 'move': 100, 'resist': 0.1, 'aoe': 0, 'dmg': 42.3775, 'sum': 175, 'buffaffected': 'AllEnemies', 'buffamount': -1, 'bufftarget': 'CritDmg', },
    {'id': 'FiSp', 'index': 'F06', 'name': 'Spark', 'elem': 'Fire', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Male', 'atk': 36, 'hp': 250, 'def': 8, 'critrate': 0.25, 'critdmg': 1, 'reload': 1, 'range': 505, 'move': 170, 'resist': 0.06, 'aoe': 0, 'dmg': 45, 'sum': 77, 'buffaffected': 'FireEnemies', 'buffamount': -2, 'bufftarget': '-Atk', },
    {'id': 'FiSy', 'index': 'F09', 'name': 'Spyro', 'elem': 'Fire', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Male', 'atk': 45, 'hp': 320, 'def': 12, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 140, 'resist': 0.08, 'aoe': 0, 'dmg': 24.75, 'sum': 101, 'buffaffected': 'Fire', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'FiTiDr', 'index': 'F01', 'name': 'Tiny Dragon', 'elem': 'Fire', 'class': 'Magician', 'rarity': 'Common', 'gender': 'Male', 'atk': 38, 'hp': 210, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 300, 'move': 180, 'resist': 0.18, 'aoe': 0, 'dmg': 43.7, 'sum': 75, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'FiTN', 'index': 'F19', 'name': 'TNT', 'elem': 'Fire', 'class': 'Gunner', 'rarity': 'Epic', 'gender': 'Male', 'atk': 40, 'hp': 220, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 480, 'move': 125, 'resist': 0.1, 'aoe': 250, 'dmg': 44, 'sum': 82, 'buffaffected': 'Fire', 'buffamount': 0.1, 'bufftarget': 'BurnTime', },
    {'id': 'FiTo', 'index': 'F18', 'name': 'Torch', 'elem': 'Fire', 'class': 'Gunner', 'rarity': 'Epic', 'gender': 'Male', 'atk': 40, 'hp': 300, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.71, 'range': 345, 'move': 160, 'resist': 0.1, 'aoe': 400, 'dmg': 31.24, 'sum': 90, 'buffaffected': 'Fire', 'buffamount': 0.5, 'bufftarget': 'BurnDMG', },
    {'id': 'FiVuAr', 'index': 'F03', 'name': 'Vulcan Archer', 'elem': 'Fire', 'class': 'Ranger', 'rarity': 'Common', 'gender': 'Male', 'atk': 24, 'hp': 200, 'def': 10, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 380, 'move': 150, 'resist': 0.06, 'aoe': 0, 'dmg': 27.6, 'sum': 64, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'FiVuFi', 'index': 'F04', 'name': 'Vulcan Fighter', 'elem': 'Fire', 'class': 'Rogue', 'rarity': 'Common', 'gender': 'Male', 'atk': 30, 'hp': 240, 'def': 10, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 150, 'resist': 0.06, 'aoe': 0, 'dmg': 34.5, 'sum': 74, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'FiVuHa', 'index': 'F02', 'name': 'Vulcan Hammer', 'elem': 'Fire', 'class': 'Barbarian', 'rarity': 'Common', 'gender': 'Male', 'atk': 45, 'hp': 400, 'def': 10, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.5, 'range': 130, 'move': 110, 'resist': 0.1, 'aoe': 0, 'dmg': 25.875, 'sum': 105, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'FiXa', 'index': 'F10', 'name': 'Xak', 'elem': 'Fire', 'class': 'Support', 'rarity': 'Rare', 'gender': 'Male', 'atk': 20, 'hp': 180, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 420, 'move': 170, 'resist': 0.22, 'aoe': 600, 'dmg': 14.74, 'sum': 58, 'buffaffected': 'Fire', 'buffamount': 0.25, 'bufftarget': 'Move', },
    {'id': 'LiAn', 'index': 'L23', 'name': 'Angelica', 'elem': 'Light', 'class': 'Support', 'rarity': 'Legendary', 'gender': 'Female', 'atk': 14, 'hp': 500, 'def': 20, 'critrate': 0, 'critdmg': 1, 'reload': 0.33, 'range': 650, 'move': 100, 'resist': 0.35, 'aoe': 0, 'dmg': 4.62, 'sum': 104, 'buffaffected': 'AllTeam', 'buffamount': 5, 'bufftarget': 'HP', },
    {'id': 'LiAr', 'index': 'L11', 'name': 'Arcana', 'elem': 'Light', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Female', 'atk': 30, 'hp': 320, 'def': 15, 'critrate': 0.25, 'critdmg': 1, 'reload': 1, 'range': 540, 'move': 150, 'resist': 0.12, 'aoe': 0, 'dmg': 37.5, 'sum': 92, 'buffaffected': 'Light', 'buffamount': 2, 'bufftarget': 'CritDmg', },
    {'id': 'LiBiEy', 'index': 'L02', 'name': 'Big Eye', 'elem': 'Light', 'class': 'Magician', 'rarity': 'Common', 'gender': 'Male', 'atk': 25, 'hp': 450, 'def': 8, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 310, 'move': 180, 'resist': 0.26, 'aoe': 0, 'dmg': 27.5, 'sum': 86, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'LiBu', 'index': 'L09', 'name': 'Bun-gun', 'elem': 'Light', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 22, 'hp': 270, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 420, 'move': 150, 'resist': 0.15, 'aoe': 0, 'dmg': 20.086, 'sum': 69, 'buffaffected': 'Light', 'buffamount': 0.02, 'bufftarget': 'Dogde', },
    {'id': 'LiGoKn', 'index': 'L10', 'name': 'Gold Knight', 'elem': 'Light', 'class': 'Knight', 'rarity': 'Rare', 'gender': 'Male', 'atk': 40, 'hp': 480, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 140, 'resist': 0.12, 'aoe': 0, 'dmg': 44, 'sum': 118, 'buffaffected': 'Light', 'buffamount': 0.25, 'bufftarget': 'Move', },
    {'id': 'LiHeBo', 'index': 'L04', 'name': 'Healer Bot', 'elem': 'Light', 'class': 'Support', 'rarity': 'Common', 'gender': 'Male', 'atk': 10, 'hp': 300, 'def': 2, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 490, 'move': 140, 'resist': 0.25, 'aoe': 0, 'dmg': 11, 'sum': 44, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'LiHi', 'index': 'L20', 'name': 'Hikari', 'elem': 'Light', 'class': 'Samurai', 'rarity': 'Epic', 'gender': 'Male', 'atk': 40, 'hp': 525, 'def': 6, 'critrate': 0.25, 'critdmg': 2, 'reload': 1, 'range': 150, 'move': 170, 'resist': 0.12, 'aoe': 0, 'dmg': 60, 'sum': 104.5, 'buffaffected': 'AllTeam', 'buffamount': 0.3, 'bufftarget': 'Move', },
    {'id': 'LiJoOfAr', 'index': 'L07', 'name': 'Joan Of Arc', 'elem': 'Light', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Female', 'atk': 28, 'hp': 500, 'def': 12, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 220, 'move': 140, 'resist': 0.12, 'aoe': 0, 'dmg': 20.636, 'sum': 102, 'buffaffected': 'Light', 'buffamount': 4, 'bufftarget': 'Def', },
    {'id': 'LiKr', 'index': 'L06', 'name': 'Krunk', 'elem': 'Light', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 28, 'hp': 600, 'def': 14, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 410, 'move': 140, 'resist': 0.1, 'aoe': 0, 'dmg': 25.564, 'sum': 116, 'buffaffected': 'Light', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'LiLiKn', 'index': 'L01', 'name': 'Light Knight', 'elem': 'Light', 'class': 'Rogue', 'rarity': 'Common', 'gender': 'Male', 'atk': 25, 'hp': 350, 'def': 15, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 220, 'resist': 0.12, 'aoe': 0, 'dmg': 30, 'sum': 90, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'LiMe', 'index': 'L12', 'name': 'Merlinus', 'elem': 'Light', 'class': 'Support', 'rarity': 'Rare', 'gender': 'Male', 'atk': 14, 'hp': 270, 'def': 12, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 550, 'move': 100, 'resist': 0.29, 'aoe': 0, 'dmg': 10.318, 'sum': 65, 'buffaffected': 'Light', 'buffamount': 5, 'bufftarget': 'HP', },
    {'id': 'LiMoRo', 'index': 'L19', 'name': 'Monki Roboti', 'elem': 'Light', 'class': 'Brawler', 'rarity': 'Epic', 'gender': 'Male', 'atk': 50, 'hp': 450, 'def': 20, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.77, 'range': 165, 'move': 150, 'resist': 0.25, 'aoe': 0, 'dmg': 42.35, 'sum': 135, 'buffaffected': 'AllTeam', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'LiOnEy', 'index': 'L18', 'name': 'One Eye', 'elem': 'Light', 'class': 'Rogue', 'rarity': 'Rare', 'gender': 'Male', 'atk': 32, 'hp': 480, 'def': 8, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 220, 'resist': 0.14, 'aoe': 0, 'dmg': 38.4, 'sum': 96, 'buffaffected': 'Light', 'buffamount': 0.1, 'bufftarget': 'Reload', },
    {'id': 'LiPa', 'index': 'L21', 'name': 'Paladin', 'elem': 'Light', 'class': 'Knight', 'rarity': 'Epic', 'gender': 'Male', 'atk': 35, 'hp': 550, 'def': 40, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 140, 'resist': 0.12, 'aoe': 0, 'dmg': 38.5, 'sum': 170, 'buffaffected': 'AllTeam', 'buffamount': -0.25, 'bufftarget': 'NegEffectTime', },
    {'id': 'LiRa', 'index': 'L14', 'name': 'Ra', 'elem': 'Light', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Male', 'atk': 38, 'hp': 190, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 350, 'move': 130, 'resist': 0.23, 'aoe': 0, 'dmg': 28.006, 'sum': 87, 'buffaffected': 'Magician', 'buffamount': 2, 'bufftarget': 'AtkHPDef', },
    {'id': 'LiSeSh', 'index': 'L13', 'name': 'Ser Shu', 'elem': 'Light', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Male', 'atk': 30, 'hp': 430, 'def': 32, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.71, 'range': 340, 'move': 140, 'resist': 0.12, 'aoe': 400, 'dmg': 23.43, 'sum': 137, 'buffaffected': 'Lancer', 'buffamount': 0.03, 'bufftarget': 'Range', },
    {'id': 'LiSe', 'index': 'L16', 'name': 'Seraph', 'elem': 'Light', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Female', 'atk': 38, 'hp': 250, 'def': 10, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 520, 'move': 120, 'resist': 0.1, 'aoe': 0, 'dmg': 45.6, 'sum': 83, 'buffaffected': 'Ranger', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'LiSi', 'index': 'L17', 'name': 'Siegfried', 'elem': 'Light', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 32, 'hp': 780, 'def': 14, 'critrate': 0.25, 'critdmg': 1, 'reload': 0.83, 'range': 200, 'move': 125, 'resist': 0.14, 'aoe': 350, 'dmg': 33.2, 'sum': 138, 'buffaffected': 'Self', 'buffamount': 8, 'bufftarget': 'HP', },
    {'id': 'LiSp', 'index': 'L05', 'name': 'Spike', 'elem': 'Light', 'class': 'Barbarian', 'rarity': 'Common', 'gender': 'Male', 'atk': 26, 'hp': 580, 'def': 30, 'critrate': 0.25, 'critdmg': 1, 'reload': 0.83, 'range': 200, 'move': 140, 'resist': 0.14, 'aoe': 350, 'dmg': 26.975, 'sum': 144, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'LiSw', 'index': 'L03', 'name': 'Swift', 'elem': 'Light', 'class': 'Ranger', 'rarity': 'Common', 'gender': 'Female', 'atk': 24, 'hp': 250, 'def': 10, 'critrate': 0.05, 'critdmg': 1, 'reload': 1.25, 'range': 380, 'move': 160, 'resist': 0.06, 'aoe': 0, 'dmg': 31.5, 'sum': 69, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'LiTaSu', 'index': 'L08', 'name': 'Tan Suu', 'elem': 'Light', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Male', 'atk': 30, 'hp': 410, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 450, 'move': 130, 'resist': 0.3, 'aoe': 0, 'dmg': 22.11, 'sum': 91, 'buffaffected': 'Light', 'buffamount': -0.2, 'bufftarget': 'ElementalDMG', },
    {'id': 'LiTe', 'index': 'L22', 'name': 'Tesla', 'elem': 'Light', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Female', 'atk': 36, 'hp': 360, 'def': 6, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 390, 'move': 160, 'resist': 0.19, 'aoe': 150, 'dmg': 35.856, 'sum': 84, 'buffaffected': 'Self', 'buffamount': 8, 'bufftarget': 'Atk', },
    {'id': 'LiTh', 'index': 'L15', 'name': 'Thor', 'elem': 'Light', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 48, 'hp': 600, 'def': 14, 'critrate': 0.25, 'critdmg': 1, 'reload': 0.5, 'range': 200, 'move': 100, 'resist': 0.16, 'aoe': 0, 'dmg': 30, 'sum': 136, 'buffaffected': 'Light', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'PlCl', 'index': 'P20', 'name': 'Clawdette', 'elem': 'Plant', 'class': 'Brawler', 'rarity': 'Epic', 'gender': 'Female', 'atk': 45, 'hp': 410, 'def': 18, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 175, 'move': 145, 'resist': 0.26, 'aoe': 0, 'dmg': 54, 'sum': 122, 'buffaffected': 'AllTeam', 'buffamount': 0.5, 'bufftarget': 'PoisonDMG', },
    {'id': 'PlGl', 'index': 'P10', 'name': 'Gladiator', 'elem': 'Plant', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 42, 'hp': 840, 'def': 25, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.67, 'range': 150, 'move': 100, 'resist': 0.12, 'aoe': 350, 'dmg': 32.361, 'sum': 176, 'buffaffected': 'Plant', 'buffamount': 4, 'bufftarget': 'HP', },
    {'id': 'PlGrFa', 'index': 'P21', 'name': 'Green Faery', 'elem': 'Plant', 'class': 'Support', 'rarity': 'Epic', 'gender': 'Female', 'atk': 20, 'hp': 250, 'def': 14, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.5, 'range': 460, 'move': 150, 'resist': 0.29, 'aoe': 0, 'dmg': 12, 'sum': 73, 'buffaffected': 'AllTeam', 'buffamount': 4, 'bufftarget': 'HP', },
    {'id': 'PlGr', 'index': 'P07', 'name': 'Groovine', 'elem': 'Plant', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Female', 'atk': 48, 'hp': 350, 'def': 9, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 550, 'move': 140, 'resist': 0.24, 'aoe': 0, 'dmg': 52.8, 'sum': 101, 'buffaffected': 'Plant', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'PlHo', 'index': 'P16', 'name': 'Hooky', 'elem': 'Plant', 'class': 'Gunner', 'rarity': 'Epic', 'gender': 'Male', 'atk': 30, 'hp': 420, 'def': 20, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 450, 'move': 125, 'resist': 0.1, 'aoe': 0, 'dmg': 27.39, 'sum': 112, 'buffaffected': 'Plant', 'buffamount': 0.03, 'bufftarget': 'Range', },
    {'id': 'PlKr', 'index': 'P12', 'name': 'Krouki', 'elem': 'Plant', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 38, 'hp': 280, 'def': 10, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 490, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 37.848, 'sum': 86, 'buffaffected': 'Plant', 'buffamount': 2, 'bufftarget': 'CritDmg', },
    {'id': 'PlLeBl', 'index': 'P17', 'name': 'Leaf Blade', 'elem': 'Plant', 'class': 'Knight', 'rarity': 'Epic', 'gender': 'Male', 'atk': 50, 'hp': 370, 'def': 16, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 140, 'resist': 0.11, 'aoe': 0, 'dmg': 57.5, 'sum': 119, 'buffaffected': 'AllTeam', 'buffamount': 4, 'bufftarget': 'Def', },
    {'id': 'PlLy', 'index': 'P22', 'name': 'Lycan', 'elem': 'Plant', 'class': 'Brawler', 'rarity': 'Epic', 'gender': 'Male', 'atk': 45, 'hp': 500, 'def': 18, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 180, 'move': 145, 'resist': 0.26, 'aoe': 0, 'dmg': 54, 'sum': 131, 'buffaffected': 'Plant', 'buffamount': 0.1, 'bufftarget': 'Reload', },
    {'id': 'PlMi', 'index': 'P13', 'name': 'Misty', 'elem': 'Plant', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Female', 'atk': 20, 'hp': 280, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.83, 'range': 410, 'move': 150, 'resist': 0.12, 'aoe': 150, 'dmg': 19.09, 'sum': 64, 'buffaffected': 'Plant', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'PlMu', 'index': 'P09', 'name': 'Musashi', 'elem': 'Plant', 'class': 'Samurai', 'rarity': 'Rare', 'gender': 'Male', 'atk': 50, 'hp': 300, 'def': 8, 'critrate': 0.25, 'critdmg': 2, 'reload': 1, 'range': 150, 'move': 170, 'resist': 0.08, 'aoe': 0, 'dmg': 75, 'sum': 96, 'buffaffected': 'Plant', 'buffamount': 0.25, 'bufftarget': 'Move', },
    {'id': 'PlNa', 'index': 'P05', 'name': 'Natura', 'elem': 'Plant', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Female', 'atk': 34, 'hp': 440, 'def': 12, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 240, 'move': 140, 'resist': 0.08, 'aoe': 300, 'dmg': 25.058, 'sum': 102, 'buffaffected': 'Plant', 'buffamount': 4, 'bufftarget': 'Def', },
    {'id': 'PlPe', 'index': 'P19', 'name': 'Petunia', 'elem': 'Plant', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Female', 'atk': 45, 'hp': 300, 'def': 16, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.5, 'range': 405, 'move': 180, 'resist': 0.19, 'aoe': 0, 'dmg': 27, 'sum': 107, 'buffaffected': 'AllTeam', 'buffamount': 5, 'bufftarget': 'Def', },
    {'id': 'PlPi', 'index': 'P06', 'name': 'Pinky', 'elem': 'Plant', 'class': 'Rogue', 'rarity': 'Rare', 'gender': 'Male', 'atk': 42, 'hp': 200, 'def': 12, 'critrate': 0.35, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 230, 'resist': 0.14, 'aoe': 0, 'dmg': 56.7, 'sum': 86, 'buffaffected': 'Rogue', 'buffamount': 2, 'bufftarget': 'AtkHPDef', },
    {'id': 'PlPu', 'index': 'P15', 'name': 'PumpKing', 'elem': 'Plant', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 40, 'hp': 550, 'def': 20, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.83, 'range': 220, 'move': 100, 'resist': 0.1, 'aoe': 440, 'dmg': 38.18, 'sum': 135, 'buffaffected': 'AllTeam', 'buffamount': 0.5, 'bufftarget': 'PoisonDMG', },
    {'id': 'PlRoHo', 'index': 'P08', 'name': 'Robin Hood', 'elem': 'Plant', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Male', 'atk': 30, 'hp': 270, 'def': 6, 'critrate': 0.25, 'critdmg': 1, 'reload': 1, 'range': 590, 'move': 160, 'resist': 0.08, 'aoe': 0, 'dmg': 37.5, 'sum': 69, 'buffaffected': 'Plant', 'buffamount': 2, 'bufftarget': 'CritDmg', },
    {'id': 'PlSp', 'index': 'P01', 'name': 'Sprout', 'elem': 'Plant', 'class': 'Magician', 'rarity': 'Common', 'gender': 'Male', 'atk': 34, 'hp': 260, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 370, 'move': 180, 'resist': 0.22, 'aoe': 0, 'dmg': 39.1, 'sum': 76, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'PlTe', 'index': 'P11', 'name': 'Tellus', 'elem': 'Plant', 'class': 'Brawler', 'rarity': 'Rare', 'gender': 'Male', 'atk': 52, 'hp': 480, 'def': 28, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.67, 'range': 180, 'move': 140, 'resist': 0.15, 'aoe': 0, 'dmg': 40.066, 'sum': 156, 'buffaffected': 'Plant', 'buffamount': 4, 'bufftarget': 'Def', },
    {'id': 'PlTh', 'index': 'P18', 'name': 'Thorn', 'elem': 'Plant', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Female', 'atk': 40, 'hp': 400, 'def': 6, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 500, 'move': 160, 'resist': 0.2, 'aoe': 600, 'dmg': 46, 'sum': 92, 'buffaffected': 'PlantEnemies', 'buffamount': -2, 'bufftarget': '-Atk', },
    {'id': 'PlVoAr', 'index': 'P04', 'name': 'Voodoo Archer', 'elem': 'Plant', 'class': 'Ranger', 'rarity': 'Common', 'gender': 'Male', 'atk': 24, 'hp': 240, 'def': 6, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 425, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 27.6, 'sum': 60, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'PlVoDa', 'index': 'P02', 'name': 'Voodoo Dagger', 'elem': 'Plant', 'class': 'Rogue', 'rarity': 'Common', 'gender': 'Male', 'atk': 35, 'hp': 200, 'def': 8, 'critrate': 0.35, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 220, 'resist': 0.14, 'aoe': 0, 'dmg': 47.25, 'sum': 71, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'PlVoSp', 'index': 'P03', 'name': 'Voodoo Spear', 'elem': 'Plant', 'class': 'Lancer', 'rarity': 'Common', 'gender': 'Male', 'atk': 32, 'hp': 320, 'def': 6, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 18.4, 'sum': 76, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'PlWo', 'index': 'P14', 'name': 'Wolfie', 'elem': 'Plant', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 35, 'hp': 600, 'def': 16, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 220, 'move': 130, 'resist': 0.1, 'aoe': 150, 'dmg': 34.86, 'sum': 127, 'buffaffected': 'Plant', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'WaAk', 'index': 'W14', 'name': 'Akwa', 'elem': 'Water', 'class': 'Brawler', 'rarity': 'Rare', 'gender': 'Female', 'atk': 48, 'hp': 360, 'def': 20, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 200, 'move': 140, 'resist': 0.24, 'aoe': 0, 'dmg': 57.6, 'sum': 124, 'buffaffected': 'Water', 'buffamount': 0.1, 'bufftarget': 'Reload', },
    {'id': 'WaAt', 'index': 'W06', 'name': 'Atlantus', 'elem': 'Water', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Male', 'atk': 40, 'hp': 430, 'def': 12, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.4, 'range': 225, 'move': 140, 'resist': 0.15, 'aoe': 350, 'dmg': 19.2, 'sum': 107, 'buffaffected': 'Water', 'buffamount': 2, 'bufftarget': 'CritDmg', },
    {'id': 'WaBlBe', 'index': 'W13', 'name': 'Black Beard', 'elem': 'Water', 'class': 'Knight', 'rarity': 'Rare', 'gender': 'Male', 'atk': 45, 'hp': 360, 'def': 12, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 51.75, 'sum': 105, 'buffaffected': 'Water', 'buffamount': 4, 'bufftarget': 'Def', },
    {'id': 'WaBlFi', 'index': 'W02', 'name': 'Blue Fish', 'elem': 'Water', 'class': 'Magician', 'rarity': 'Common', 'gender': 'Male', 'atk': 32, 'hp': 310, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 350, 'move': 250, 'resist': 0.22, 'aoe': 0, 'dmg': 36.8, 'sum': 79, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'WaBuAr', 'index': 'W01', 'name': 'Bugonaut Archer', 'elem': 'Water', 'class': 'Ranger', 'rarity': 'Common', 'gender': 'Male', 'atk': 28, 'hp': 200, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 424, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 30.8, 'sum': 78, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'WaBuFi', 'index': 'W03', 'name': 'Bugonaut Fighter', 'elem': 'Water', 'class': 'Rogue', 'rarity': 'Common', 'gender': 'Male', 'atk': 30, 'hp': 240, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 150, 'resist': 0.1, 'aoe': 0, 'dmg': 33, 'sum': 84, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'WaBuGi', 'index': 'W05', 'name': 'Bugonaut Giant', 'elem': 'Water', 'class': 'Barbarian', 'rarity': 'Common', 'gender': 'Male', 'atk': 35, 'hp': 400, 'def': 20, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.5, 'range': 160, 'move': 100, 'resist': 0.06, 'aoe': 150, 'dmg': 21, 'sum': 115, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'WaBuSp', 'index': 'W04', 'name': 'Bugonaut Spear', 'elem': 'Water', 'class': 'Lancer', 'rarity': 'Common', 'gender': 'Male', 'atk': 28, 'hp': 280, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 110, 'resist': 0.1, 'aoe': 0, 'dmg': 15.4, 'sum': 86, 'buffaffected': '-none-', 'buffamount': 0, 'bufftarget': '-none-', },
    {'id': 'WaFrQu', 'index': 'W20', 'name': 'Frost Queen', 'elem': 'Water', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Female', 'atk': 28, 'hp': 280, 'def': 12, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 520, 'move': 150, 'resist': 0.08, 'aoe': 0, 'dmg': 33.6, 'sum': 80, 'buffaffected': 'Water', 'buffamount': 1, 'bufftarget': 'FreezeDMG', },
    {'id': 'WaGo', 'index': 'W11', 'name': 'Goddess', 'elem': 'Water', 'class': 'Support', 'rarity': 'Rare', 'gender': 'Female', 'atk': 14, 'hp': 200, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.5, 'range': 520, 'move': 140, 'resist': 0.26, 'aoe': 0, 'dmg': 7.7, 'sum': 54, 'buffaffected': 'Water', 'buffamount': 4, 'bufftarget': 'HP', },
    {'id': 'WaIcCu', 'index': 'W19', 'name': 'Ice Cube', 'elem': 'Water', 'class': 'Barbarian', 'rarity': 'Epic', 'gender': 'Male', 'atk': 45, 'hp': 710, 'def': 14, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 150, 'move': 100, 'resist': 0.1, 'aoe': 150, 'dmg': 41.085, 'sum': 144, 'buffaffected': 'AllTeam', 'buffamount': 4, 'bufftarget': 'Def', },
    {'id': 'WaIcKn', 'index': 'W08', 'name': 'Ice Knight', 'elem': 'Water', 'class': 'Knight', 'rarity': 'Rare', 'gender': 'Male', 'atk': 48, 'hp': 370, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 135, 'resist': 0.25, 'aoe': 0, 'dmg': 52.8, 'sum': 115, 'buffaffected': 'Water', 'buffamount': 0.04, 'bufftarget': 'FreezeTime', },
    {'id': 'WaLu', 'index': 'W15', 'name': 'Luka', 'elem': 'Water', 'class': 'Rogue', 'rarity': 'Rare', 'gender': 'Male', 'atk': 37, 'hp': 240, 'def': 8, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 220, 'resist': 0.15, 'aoe': 0, 'dmg': 44.4, 'sum': 77, 'buffaffected': 'Water', 'buffamount': 0.25, 'bufftarget': 'Move', },
    {'id': 'WaMa', 'index': 'W18', 'name': 'Manta', 'elem': 'Water', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Female', 'atk': 45, 'hp': 350, 'def': 8, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 410, 'move': 160, 'resist': 0.2, 'aoe': 0, 'dmg': 49.5, 'sum': 96, 'buffaffected': 'AllEnemies', 'buffamount': -1, 'bufftarget': 'AoE', },
    {'id': 'WaMi', 'index': 'W16', 'name': 'Mizu', 'elem': 'Water', 'class': 'Samurai', 'rarity': 'Rare', 'gender': 'Male', 'atk': 56, 'hp': 260, 'def': 8, 'critrate': 0.25, 'critdmg': 2, 'reload': 1, 'range': 170, 'move': 150, 'resist': 0.06, 'aoe': 0, 'dmg': 84, 'sum': 98, 'buffaffected': 'Water', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'WaNa', 'index': 'W17', 'name': 'Namida', 'elem': 'Water', 'class': 'Gunner', 'rarity': 'Epic', 'gender': 'Female', 'atk': 25, 'hp': 320, 'def': 6, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.83, 'range': 415, 'move': 160, 'resist': 0.08, 'aoe': 0, 'dmg': 23.8625, 'sum': 69, 'buffaffected': 'WaterEnemies', 'buffamount': -2, 'bufftarget': '-Atk', },
    {'id': 'WaOc', 'index': 'W10', 'name': 'Oceana', 'elem': 'Water', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Female', 'atk': 40, 'hp': 360, 'def': 8, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 480, 'move': 160, 'resist': 0.2, 'aoe': 0, 'dmg': 39.84, 'sum': 92, 'buffaffected': 'Water', 'buffamount': 4, 'bufftarget': 'HP', },
    {'id': 'WaPi', 'index': 'W09', 'name': 'Pirato', 'elem': 'Water', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 28, 'hp': 200, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 420, 'move': 180, 'resist': 0.1, 'aoe': 150, 'dmg': 25.564, 'sum': 60, 'buffaffected': 'Water', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'WaRu', 'index': 'W07', 'name': 'Rufus', 'elem': 'Water', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 40, 'hp': 240, 'def': 10, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.83, 'range': 480, 'move': 160, 'resist': 0.06, 'aoe': 0, 'dmg': 38.18, 'sum': 84, 'buffaffected': 'Water', 'buffamount': 4, 'bufftarget': 'CritDmg', },
    {'id': 'WaSn', 'index': 'W12', 'name': 'Snowman', 'elem': 'Water', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Male', 'atk': 30, 'hp': 280, 'def': 11, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 440, 'move': 140, 'resist': 0.15, 'aoe': 0, 'dmg': 33, 'sum': 80, 'buffaffected': 'Water', 'buffamount': 4, 'bufftarget': 'Atk', },
    {'id': 'WaVa', 'index': 'W21', 'name': 'Valkyrie', 'elem': 'Water', 'class': 'Ranger', 'rarity': 'Epic', 'gender': 'Female', 'atk': 32, 'hp': 280, 'def': 12, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 550, 'move': 150, 'resist': 0.08, 'aoe': 0, 'dmg': 38.4, 'sum': 84, 'buffaffected': 'AllTeam', 'buffamount': 3, 'bufftarget': 'CritDmg', }
];

let hero = {};
heroList.forEach(h =>{
    // hero[h.id] = h;
    hero[h.index] = h;
});

let heroSort = [];
heroList.forEach(h =>{
    // let nh = h;
    // nh[awst] = 77;
    heroSort.push(h);
});

/* ─────────────── CTA: Building Interface ─────────────── */

const colnames = [
    "id", "index", "name", "elem", "class", "rarity", "gender", 
    "atk", "hp", "def", "critrate", "critdmg", "reload", 
    "range", "move", "resist", "aoe", "dmg", "sum", 
    "buffaffected", "buffamount", "bufftarget"
];

const col_icons = [
    "awaken", "star",
    "atk", "hp", "def"
];

let col_start1 = [
    "index",
    "atk", "hp", "def", 
    "dmg", "sum"
];
let col_start = [
    "index", "name",  
    "atk", "hp", "def", "critrate", "critdmg", "reload", 
    "dmg", "sum"
];

let sort_ready = ["atk", "hp", "def", "dmg", "sum"];

const col_back = [
    "atk", "hp", "def", "critrate", "critdmg", "reload", 
    "range", "move", "resist", "aoe"
];
let col_special = [
    "index",
    "dmg", "sum"
];

let col_row_emoji = {
    "atk":"⚔️", "hp":"❤️", "def":"🛡️"
}
let col_percent = [
    "critrate", "critdmg",
    "resist",
    "buffamount"
];

let formationIDs = [];

let sumStats = [
    "atk", "hp", "def",  
    "dmg", "sum"
];

// var body = document.getElementsByTagName("body")[0];

// let heroTable = document.getElementById('heroTable');

// -- Table -- //
// let heroTable = document.createElement('table');
// heroTable.id = "heroTable";
let heroTable = document.getElementById('heroTable');
heroTable.classList.add('htable');

let thead = document.createElement('thead');
thead.classList.add('sticky-headers');
heroTable.appendChild(thead);
let tbody = document.createElement('tbody');
tbody.id = "tbody";
tbody.classList.add('scroll-tbody');
heroTable.appendChild(tbody);

let column_names = Object.keys(heroList[0]);
column_names.splice(0,1);

// -- Header -- //
let hrow = document.createElement('tr');
hrow.id = 'hrow';
// hrow.classList.add('hT-hrow');
column_names.forEach(col => {
    let th = document.createElement('th');
    th.classList.add(`hT-th`,`col-${col}`);

        let th_div = document.createElement('div');
        th_div.innerText = col;
        th_div.classList.add(`sortbtn`);

        // -- to add icons ↓
        if(col_icons.includes(col)){
            th_div.innerHTML = `${col}<img src="res/other-icons/${col}.png" alt="${col}" height="28" width="28" data-sort="${col}">`;
        }

        // -- to add a specific style ↓
        if(sort_ready.includes(col)){
            th_div.classList.add(`sort${col}`);
        } else { th_div.classList.add(`sortid`); }

    th.appendChild(th_div);
    hrow.appendChild(th);
});
thead.appendChild(hrow);

// -- Rows -- //
heroList.forEach(h =>{
    let row = document.createElement('tr');
    // row.id = h.index;
    row.id = `row-${h.index}`;
    row.classList.add(`hT-row`);
    row.classList.add = "row-in-tbody";
    // row.classList.add(`h_${h.elem}`);
    column_names.forEach(col => {
        let td = document.createElement('td');
        td.classList.add(`col-${col}`,`row-${h.index}`);
        td.dataset.col = col;

        // -- ↓ This adds a special style.
        if(col_special.includes(col)){
            td.classList.add(`row-bg-${col}`);
        }

        // -- ↓ This adds the background class.
        if(col_back.includes(col)){
            td.classList.add(`row-bg2-${h.elem}`);
        } else {
            td.classList.add(`row-bg-${h.elem}`);
        }

        // -- This is the div
        let td_div = document.createElement('div');
        td_div.innerText = col;

        // -- Operate the stats.
        let stat = h[col];
        if(col_percent.includes(col)){
            stat = h[col]*100;
            stat += "%"
        }
        if(col == "reload"){
            stat = h[col].toLocaleString(undefined,{ minimumFractionDigits: 2 });
        }

        // -- Fill the table.
        if(col == "index"){
            td_div.innerText = "";
            // td.innerHTML = `<img src="res/cta-hero-icon/z_empty.png" alt="${h[col]}" class="heroimg">`;
            // td_div.innerHTML = `<img src="res/cta-hero-icon/${h.name}.png" alt="${h[col]}" class="heroimg_zoomed heroimg_hide">`;
            hero_img = document.createElement('img');
            hero_img.classList.add("heroimg","heroimg_hide");
            // hero_img.classList.add("heroimg_zoomed","heroimg_hide");
            hero_img.src = `res/cta-hero-icon/${h.name}.png`;
            hero_img.alt = h[col];
            hero_img.id = `img-${h.index}`;
            hero_img.dataset.heroLocation = `tbody`;
            hero_img.dataset.heroId = h.index;
            td_div.appendChild(hero_img);
        } else if(Object.keys(col_row_emoji).includes(col)){
            td_div.innerText = col_row_emoji[col] + stat;
        } else if(col == "dmg" || col == "sum"){
            td_div.innerText = Math.round(stat,2);
        } else {
            td_div.innerText = stat;
        }

        // -- ↓ This centers the text.
        if(col_back.includes(col)){
            td_div.classList.add(`text-center`);
        }

        td.appendChild(td_div);
        row.appendChild(td);
    });
    tbody.appendChild(row);
});

/* ─────────────── CTA: Functions ─────────────── */

/*
    • toggleColumns()
    • filterRows()
    • calcAwSt()
    • selectFormation()
*/ 

// tid: table identifier

function makeTable(myColumns, myRows, tid, myClasses={}){
    // -- Table -- //
    let myTable = document.createElement('table');
    myTable.classList.add('class1', 'class2');

    // -- Header -- //
    let thead = document.createElement('thead');
    thead.classList.add('sticky-headers');

    let thead_row = document.createElement('tr');
    myColumns.forEach(col => {
        let th_cell = document.createElement('th');
        th_cell.classList.add(`col-${col}`, '');

        let hdiv = document.createElement('div');
        hdiv.innerHTML = `${col}`;
        hdiv.classList.add('tcell', 'table-header');

        th_cell.appendChild(hdiv);
        thead_row.appendChild(th_cell);
    });
    thead.appendChild(thead_row);

    // -- Rows -- //
    let tbody = document.createElement('tbody');
    tbody.classList.add('scroll-tbody');

    myRows.forEach(row => {
        let trow = document.createElement('tr');
        myColumn.forEach(col =>{
            let td_cell = document.createElement('td');
            td_cell.classList.add(`${tid}-col-${col}`, `${tid}-row-${row}`, 'td_cell');
            
            let td_cell_div = document.createElement('div');
            td_cell_div.classList.add('td_div','td_data');
            td_cell_div.innerHTML = row[col];
            
            td_cell.appendChild(td_cell_div);
            trow.appendChild(td_cell);
        });
        tbody.appendChild(trow);
    });

    myTable.appendChild(thead);
    myTable.appendChild(tbody);

}


function toggleColumns(column_to_toggle){
    // console.log(`→toggleColumns(${column_to_toggle})`);
    let column = document.querySelectorAll(`.col-${column_to_toggle}`);
    column.forEach(row=>{
        row.classList.toggle('hidden');
    });
    // console.log(column);
    let fcolumn = document.querySelectorAll(`.fcol-${column_to_toggle}`);
    // console.log(fcolumn);
    fcolumn.forEach(frow=>{
        // console.log(frow);
        frow.classList.toggle('hidden');
    });
}


// heroimg_hide
function toggleColBy(query_to_find, class_to_toggle){
    let queryResult = document.querySelectorAll(`${query_to_find}`);
    queryResult.forEach(each=>{
        each.classList.toggle(class_to_toggle);
    });
}
// toggleColBy(".heroimg_hide", "heroimg_hide");
// setTimeout(() => { 
//     toggleColBy(".heroimg_hide", "heroimg_hide");
// }, 2000);

// function addEvent(){}


/* ─────────────── CTA: mess ─────────────── */

function buildFormationTable(){
    let formationTable = document.getElementById('formationTable');
    formationTable.classList.add('ftable', 'hidden');
    
    let fhead = document.createElement('thead');
    formationTable.appendChild(fhead);
    let fbody = document.createElement('tbody');
    fbody.id = "fbody";
    formationTable.appendChild(fbody);
    
    // -- Header -- //
    let fhrow = document.createElement('tr');
    fhrow.id = 'fhrow';
    
    column_names.forEach(col => {
        let th = document.createElement('th');
        th.classList.add(`fT-th`,`fcol-${col}`);
    
            let th_div = document.createElement('div');
            th_div.innerText = col;
            th_div.classList.add(`sortbtn`);
    
            // -- to add icons ↓
            if(col_icons.includes(col)){
                th_div.innerHTML = `${col}<img src="res/other-icons/${col}.png" alt="${col}" height="28" width="28" data-fsort="${col}">`;
            }
    
            // -- to add a specific style ↓
            if(sort_ready.includes(col)){
                th_div.classList.add(`sort${col}`);
            } else { th_div.classList.add(`sortid`); }
    
        th.appendChild(th_div);
        fhrow.appendChild(th);
    });
    fhead.appendChild(fhrow);
}
// buildFormationTable();

// function selectFormation(hero_row){
//     let fbody = document.getElementById('fbody');
//     fbody.appendChild(hero_row);
//     hero_row.dataset.location = "fbody";
// }

function toggleHero(heroID){
    if(document.getElementById('formationTable').classList.contains('hidden')){
        document.getElementById('formationTable').classList.remove('hidden');
        // buildSumRow();
    }

    let fbody = document.getElementById('fbody');
    let tbody = document.getElementById('tbody');
    let hero_row = document.getElementById(`row-${heroID}`);
    let hero_img = document.getElementById(`img-${heroID}`);
    let sum_row = document.getElementById(`frow-sum`);
    let formationCount = fbody.children.length;
    console.log(formationCount);
    if(hero_img.dataset.heroLocation == "fbody"){
        tbody.appendChild(hero_row);
        hero_row.classList.add = "row-in-tbody";
        hero_row.classList.remove = "row-in-fbody";
        hero_img.dataset.heroLocation = "tbody";
        formationIDs.splice(formationIDs.indexOf(heroID),1);
    } else {
        if(formationCount < 11){
            fbody.appendChild(hero_row);
            hero_row.classList.remove = "row-in-tbody";
            hero_row.classList.add = "row-in-fbody";
            hero_img.dataset.heroLocation = "fbody";
            formationIDs.push(heroID);
        }
    }
    fbody.appendChild(sum_row);
    updateSumRow();
}

function buildSumRow(){
    let fbody = document.getElementById('fbody');
    let sum = {'atk': 0, 'hp': 0, 'def': 0, 'critrate': 0, 'critdmg': 0, 'reload': 0, 'range': 0, 'move': 0, 'resist': 0, 'aoe': 0, 'dmg': 0, 'sum': 0}
    let keysToAdd = Object.keys(sum);
    // formationIDs.forEach(heroid => {
    //     keysToAdd.forEach(att => {
    //         sum[att] += hero[heroid][att];
    //     });
    // });

    let frow = document.createElement('tr');
    // row.id = h.index;
    frow.id = `frow-sum`;
    frow.classList.add(`fT-row`);
    frow.classList.add = "row-in-fbody";
    // row.classList.add(`h_${h.elem}`);
    column_names.forEach(col => {
        let td = document.createElement('td');
        td.classList.add(`fcol-${col}`,`frow-sum`);
        td.dataset.col = col;

        // -- ↓ This adds a special style.
        if(col_special.includes(col)){
            td.classList.add(`row-bg-${col}`);
        }

        // -- ↓ This adds the background class.
        if(col_back.includes(col)){
            td.classList.add(`row-bg2-sum`);
        } else {
            td.classList.add(`row-bg-sum`);
        }

        // -- This is the div
        let td_div = document.createElement('div');
        td_div.id = `sum-${col}`;

        // -- Operate the stats.
        let stat = "";
        if(col == "name") {stat = "Sum"}
        // if(col == "elem") {stat = "Mostly... ${which repeats the most.}"}
        if(col_percent.includes(col)){
            stat = sum[col]*100;
            stat += "%"
        }
        if(col == "reload"){
            stat = sum[col].toLocaleString(undefined,{ minimumFractionDigits: 2 });
        }

        // -- Fill the table.
        if(col == "index"){
            td_div.innerText = "";
            // td.innerHTML = `<img src="res/cta-hero-icon/z_empty.png" alt="${h[col]}" class="heroimg">`;
            // td_div.innerHTML = `<img src="res/cta-hero-icon/${h.name}.png" alt="${h[col]}" class="heroimg_zoomed heroimg_hide">`;
            hero_img = document.createElement('img');
            hero_img.classList.add("heroimg_zoomed","heroimg_hide");
            hero_img.src = `res/other-icons/player.png`;
            hero_img.alt = "sum of formation";
            hero_img.id = `img-sum`;
            // hero_img.dataset.heroLocation = `fbody`;
            // hero_img.dataset.heroId = h.index;
            td_div.appendChild(hero_img);
        } else if(Object.keys(col_row_emoji).includes(col)){
            td_div.innerText = col_row_emoji[col] + stat;
        } else {
            td_div.innerText = stat;
        }

        // -- ↓ This centers the text.
        if(col_back.includes(col)){
            td_div.classList.add(`text-center`);
        }

        td.appendChild(td_div);
        frow.appendChild(td);
    });
    fbody.appendChild(frow);
    // let formation = document.querySelectorAll('.row-in-fbody');
}


function updateSumRow(){
    let fbody = document.getElementById('fbody');
    let sum = {'atk': 0, 'hp': 0, 'def': 0, 'critrate': 0, 'critdmg': 0, 'reload': 0, 
    'range': 0, 'move': 0, 'resist': 0, 'aoe': 0, 'dmg': 0, 'sum': 0}
    let keysToAdd = Object.keys(sum);
    formationIDs.forEach(heroid => {
        keysToAdd.forEach(att => {
            sum[att] += hero[heroid][att];
        });
    });
    let formation_count = formationIDs.length;
    keysToAdd.forEach(col => {
        let divAtt = document.getElementById(`sum-${col}`);
        let stat = sum[col]/formation_count;

        if(sumStats.includes(col)){
            stat = Math.round(sum[col],2);
        } else {
            stat = Math.round(sum[col]/formation_count,2);
        }

        if(col_percent.includes(col)){
            // stat = sum[col]*100;
            // stat = stat/formation_count;
            stat = Math.round((sum[col]/formation_count)*100,2);
            stat += "%"
        }
        if(col == "reload"){
            stat = sum[col]/formation_count;
            stat = stat.toLocaleString(undefined,{ minimumFractionDigits: 2 });
        }

        if(Object.keys(col_row_emoji).includes(col)){
            divAtt.innerText = col_row_emoji[col] + stat;
        } else {
            divAtt.innerText = stat;
        }
    });
}

function sortHeroesBy(){
    // var heroSort = [];
    // heroSort = heroSort.concat(heroArray);

    // switch(att){
    //     case "id":
    //         heroSort.sort(function(a, b){return a.herosort - b.herosort});
    //         heroSort.sort(function(a, b){return a.elem.localeCompare(b.elem)});
    //         break;
    //     case "name":
    //         heroSort.sort(function(a, b){return a.heroname.localeCompare(b.heroname)});
    //         break;
    //     case "atk":
    //         heroSort.sort(function(a, b){return a.atk - b.atk});
    //         break;
    //     case "hp":
    //         heroSort.sort(function(a, b){return a.hp - b.hp});
    //         break;
    //     case "def":
    //         heroSort.sort(function(a, b){return a.def - b.def});
    //         break;
    //     case "critrate":
    //         heroSort.sort(function(a, b){return a.critrate - b.critrate});
    //         break;
    //     case "critdmg":
    //         heroSort.sort(function(a, b){return a.critdmg - b.critdmg});
    //         break;
    //     case "reload":
    //         heroSort.sort(function(a, b){return a.reload - b.reload});
    //         break;
    //     case "dmg":
    //         heroSort.sort(function(a, b){
    //             return (a.atk*a.reload*((a.critrate*a.critdmg)+1)) - (b.atk*b.reload*((b.critrate*b.critdmg)+1))
    //         });
    //         break;
    //     case "sum":
    //         heroSort.sort(function(a, b){
    //             var aDmg = (a.atk*a.reload*((a.critrate*a.critdmg)+1));
    //             var bDmg = (b.atk*b.reload*((b.critrate*b.critdmg)+1));
    //             return (aDmg+(a.hp/10)+(a.def*2)) - (bDmg+(b.hp/10)+(b.def*2))
    //         });
    //         break;
    //     default:
    //         heroSort.sort(function(a, b){return a[att] - b[att]});
    //         break;
    // }
    // Repopulate(heroSort, att);
}

/* ─────────────── CTA: event mess ─────────────── */

document.addEventListener('click', (ev)=>{

    // //-- Click event for sorting.
    // if (event.target.dataset.sort != null){
    //     console.log("Calling: sortBy() > " + event.target.dataset.sort);
    //     sortBy(heroList, event.target.dataset.sort);
    // }

    if (event.target.dataset.heroLocation != null){
        console.log("Calling: toggleHero() > " + event.target.dataset.heroLocation);
        toggleHero(event.target.dataset.heroId);
    }

});



/* ─────────────── CTA: calling things ─────────────── */

buildFormationTable();
buildSumRow();

colnames.forEach(col=>{
    if(!col_start.includes(col)){
        toggleColumns(col)
    }
});

toggleColBy(".heroimg_hide", "heroimg_hide");


console.log(" ─── End ─── ");