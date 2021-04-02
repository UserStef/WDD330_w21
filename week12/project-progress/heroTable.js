// localStorage.removeItem("formation");
const heroList = [
    { 'id': 'DaBa', 'index': 'D05', 'name': 'Bat', 'elem': 'Dark', 'class': 'Magician', 'rarity': 'Common', 'gender': 'Male', 'atk': 52, 'hp': 220, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 350, 'move': 250, 'resist': 0.18, 'aoe': 0, 'dmg': 59.8, 'sum': 90, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'DaCh', 'index': 'D09', 'name': 'Chaos', 'elem': 'Dark', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 80, 'hp': 440, 'def': 20, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 100, 'resist': 0.12, 'aoe': 150, 'dmg': 46, 'sum': 164, 'bufftarget': 'Dark', 'buffamount': 4, 'buffattribute': 'Def' },
    { 'id': 'DaCi', 'index': 'D08', 'name': 'Circe', 'elem': 'Dark', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Female', 'atk': 50, 'hp': 250, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.5, 'range': 545, 'move': 160, 'resist': 0.3, 'aoe': 0, 'dmg': 27.5, 'sum': 87, 'bufftarget': 'Dark', 'buffamount': 4, 'buffattribute': 'HP' },
    { 'id': 'DaDaHu', 'index': 'D12', 'name': 'Dark Hunter', 'elem': 'Dark', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Male', 'atk': 52, 'hp': 200, 'def': 6, 'critrate': 0.25, 'critdmg': 1, 'reload': 1, 'range': 590, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 65, 'sum': 84, 'bufftarget': 'AllEnemies', 'buffamount': -0.5, 'buffattribute': '-Atk' },
    { 'id': 'DaDaKn', 'index': 'D06', 'name': 'Dark Knight', 'elem': 'Dark', 'class': 'Knight', 'rarity': 'Rare', 'gender': 'Male', 'atk': 70, 'hp': 320, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 120, 'resist': 0.1, 'aoe': 0, 'dmg': 77, 'sum': 132, 'bufftarget': 'AllEnemies', 'buffamount': -0.5, 'buffattribute': '-Def' },
    { 'id': 'DaDaWo', 'index': 'D10', 'name': 'Dark Wolf', 'elem': 'Dark', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Male', 'atk': 45, 'hp': 400, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.56, 'range': 535, 'move': 100, 'resist': 0.22, 'aoe': 0, 'dmg': 27.72, 'sum': 105, 'bufftarget': 'AllEnemies', 'buffamount': -0.25, 'buffattribute': '-Move' },
    { 'id': 'DaDrBo', 'index': 'D04', 'name': 'Dragon Bot', 'elem': 'Dark', 'class': 'Gunner', 'rarity': 'Common', 'gender': 'Male', 'atk': 44, 'hp': 280, 'def': 12, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 430, 'move': 150, 'resist': 0.25, 'aoe': 0, 'dmg': 50.6, 'sum': 96, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'DaKa', 'index': 'D07', 'name': 'Kage', 'elem': 'Dark', 'class': 'Samurai', 'rarity': 'Rare', 'gender': 'Male', 'atk': 75, 'hp': 260, 'def': 6, 'critrate': 0.25, 'critdmg': 2, 'reload': 1, 'range': 170, 'move': 150, 'resist': 0.08, 'aoe': 0, 'dmg': 112.5, 'sum': 113, 'bufftarget': 'AllEnemies', 'buffamount': -0.5, 'buffattribute': '-HP' },
    { 'id': 'DaKs', 'index': 'D15', 'name': 'Kasumi', 'elem': 'Dark', 'class': 'Rogue', 'rarity': 'Epic', 'gender': 'Female', 'atk': 38, 'hp': 240, 'def': 8, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 220, 'resist': 0.1, 'aoe': 0, 'dmg': 45.6, 'sum': 78, 'bufftarget': 'AllEnemies', 'buffamount': -0.1, 'buffattribute': '-Reload' },
    { 'id': 'DaMoMo', 'index': 'D13', 'name': 'Monki Mortar', 'elem': 'Dark', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 35, 'hp': 230, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 405, 'move': 170, 'resist': 0.1, 'aoe': 150, 'dmg': 31.955, 'sum': 70, 'bufftarget': 'Dark', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'DaNe', 'index': 'D17', 'name': 'Necromancer', 'elem': 'Dark', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Male', 'atk': 38, 'hp': 250, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 605, 'move': 130, 'resist': 0.23, 'aoe': 0, 'dmg': 28.006, 'sum': 93, 'bufftarget': 'Skeleton', 'buffamount': 2, 'buffattribute': 'AtkHPDef' },
    { 'id': 'DaNk', 'index': 'D11', 'name': 'Neko', 'elem': 'Dark', 'class': 'Brawler', 'rarity': 'Rare', 'gender': 'Female', 'atk': 80, 'hp': 300, 'def': 20, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 175, 'move': 165, 'resist': 0.18, 'aoe': 0, 'dmg': 96, 'sum': 150, 'bufftarget': 'Dark', 'buffamount': 0.25, 'buffattribute': 'Move' },
    { 'id': 'DaOn', 'index': 'D19', 'name': 'Onyx', 'elem': 'Dark', 'class': 'Lancer', 'rarity': 'Epic', 'gender': 'Female', 'atk': 54, 'hp': 300, 'def': 12, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.5, 'range': 250, 'move': 150, 'resist': 0.1, 'aoe': 350, 'dmg': 29.7, 'sum': 108, 'bufftarget': 'AllTeam', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'DaOr', 'index': 'D20', 'name': 'Ornok', 'elem': 'Dark', 'class': 'Knight', 'rarity': 'Legendary', 'gender': 'Male', 'atk': 64, 'hp': 500, 'def': 35, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 150, 'move': 110, 'resist': 0.2, 'aoe': 300, 'dmg': 58.432, 'sum': 184, 'bufftarget': 'AllTeam', 'buffamount': 3, 'buffattribute': 'Shield' },
    { 'id': 'DaSkGi', 'index': 'D01', 'name': 'Skeleton Giant', 'elem': 'Dark', 'class': 'Barbarian', 'rarity': 'Common', 'gender': 'Male', 'atk': 45, 'hp': 380, 'def': 20, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 100, 'resist': 0.1, 'aoe': 350, 'dmg': 25.875, 'sum': 123, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'DaSkIn', 'index': 'D02', 'name': 'Skeleton Infantry', 'elem': 'Dark', 'class': 'Rogue', 'rarity': 'Common', 'gender': 'Male', 'atk': 30, 'hp': 300, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 160, 'move': 200, 'resist': 0.1, 'aoe': 0, 'dmg': 33, 'sum': 72, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'DaSkRa', 'index': 'D03', 'name': 'Skeleton Ranger', 'elem': 'Dark', 'class': 'Ranger', 'rarity': 'Common', 'gender': 'Male', 'atk': 30, 'hp': 200, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 455, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 33, 'sum': 62, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'DaSo', 'index': 'D14', 'name': 'Sorrow', 'elem': 'Dark', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Female', 'atk': 35, 'hp': 350, 'def': 16, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.5, 'range': 620, 'move': 180, 'resist': 0.08, 'aoe': 0, 'dmg': 21, 'sum': 102, 'bufftarget': 'Gunner', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'DaTr', 'index': 'D18', 'name': 'Trickster', 'elem': 'Dark', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Male', 'atk': 48, 'hp': 340, 'def': 10, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 510, 'move': 200, 'resist': 0.22, 'aoe': 0, 'dmg': 57.6, 'sum': 102, 'bufftarget': 'AllEnemies', 'buffamount': 0.06, 'buffattribute': 'DebuffTime' },
    { 'id': 'DaVl', 'index': 'D16', 'name': 'Vlad', 'elem': 'Dark', 'class': 'Support', 'rarity': 'Epic', 'gender': 'Male', 'atk': 42, 'hp': 250, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 560, 'move': 160, 'resist': 0.3, 'aoe': 0, 'dmg': 46.2, 'sum': 79, 'bufftarget': 'AllEnemies', 'buffamount': -0.1, 'buffattribute': '-Reload' },
    { 'id': 'FiAl', 'index': 'F17', 'name': 'Alda', 'elem': 'Fire', 'class': 'Ranger', 'rarity': 'Epic', 'gender': 'Female', 'atk': 38, 'hp': 240, 'def': 6, 'critrate': 0.25, 'critdmg': 1, 'reload': 1, 'range': 555, 'move': 150, 'resist': 0.06, 'aoe': 0, 'dmg': 47.5, 'sum': 74, 'bufftarget': 'AllTeam', 'buffamount': 3, 'buffattribute': 'CritDmg' },
    { 'id': 'FiFiMo', 'index': 'F11', 'name': 'Fire Monk', 'elem': 'Fire', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Male', 'atk': 45, 'hp': 320, 'def': 8, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 510, 'move': 160, 'resist': 0.16, 'aoe': 0, 'dmg': 44.82, 'sum': 93, 'bufftarget': 'Fire', 'buffamount': 4, 'buffattribute': 'HP' },
    { 'id': 'FiFu', 'index': 'F12', 'name': 'Furiosa', 'elem': 'Fire', 'class': 'Knight', 'rarity': 'Rare', 'gender': 'Female', 'atk': 60, 'hp': 340, 'def': 14, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 150, 'resist': 0.08, 'aoe': 0, 'dmg': 72, 'sum': 122, 'bufftarget': 'Fire', 'buffamount': 0.03, 'buffattribute': 'Frenzy' },
    { 'id': 'FiJa', 'index': 'F05', 'name': 'Jasmine', 'elem': 'Fire', 'class': 'Rogue', 'rarity': 'Rare', 'gender': 'Female', 'atk': 45, 'hp': 240, 'def': 8, 'critrate': 0.3, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 200, 'resist': 0.06, 'aoe': 0, 'dmg': 58.5, 'sum': 85, 'bufftarget': 'Fire', 'buffamount': 2, 'buffattribute': 'CritDmg' },
    { 'id': 'FiKa', 'index': 'F08', 'name': 'Kasai', 'elem': 'Fire', 'class': 'Samurai', 'rarity': 'Rare', 'gender': 'Male', 'atk': 62, 'hp': 220, 'def': 8, 'critrate': 0.3, 'critdmg': 2, 'reload': 1, 'range': 170, 'move': 150, 'resist': 0.04, 'aoe': 0, 'dmg': 99.2, 'sum': 100, 'bufftarget': 'Fire', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'FiMa', 'index': 'F14', 'name': 'Magmus', 'elem': 'Fire', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 65, 'hp': 520, 'def': 18, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 100, 'resist': 0.07, 'aoe': 150, 'dmg': 37.375, 'sum': 153, 'bufftarget': 'Fire', 'buffamount': 4, 'buffattribute': 'Def' },
    { 'id': 'FiMeVa', 'index': 'F15', 'name': 'Mecha Valken', 'elem': 'Fire', 'class': 'Brawler', 'rarity': 'Rare', 'gender': 'Male', 'atk': 65, 'hp': 360, 'def': 20, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 180, 'move': 140, 'resist': 0.2, 'aoe': 300, 'dmg': 64.74, 'sum': 141, 'bufftarget': 'Fire', 'buffamount': 4, 'buffattribute': 'Def' },
    { 'id': 'FiMoKi', 'index': 'F13', 'name': 'Monki King', 'elem': 'Fire', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Male', 'atk': 38, 'hp': 210, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 320, 'move': 180, 'resist': 0.14, 'aoe': 300, 'dmg': 43.7, 'sum': 75, 'bufftarget': 'Fire', 'buffamount': 0.1, 'buffattribute': 'Reload' },
    { 'id': 'FiMoMe', 'index': 'F07', 'name': 'Monki Merry', 'elem': 'Fire', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Male', 'atk': 42, 'hp': 420, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 480, 'move': 140, 'resist': 0.16, 'aoe': 0, 'dmg': 38.346, 'sum': 104, 'bufftarget': 'AllTeam', 'buffamount': 0.06, 'buffattribute': 'Resist' },
    { 'id': 'FiSc', 'index': 'F16', 'name': 'Scud', 'elem': 'Fire', 'class': 'Gunner', 'rarity': 'Epic', 'gender': 'Male', 'atk': 35, 'hp': 210, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.83, 'range': 400, 'move': 160, 'resist': 0.1, 'aoe': 150, 'dmg': 33.4075, 'sum': 72, 'bufftarget': 'AllTeam', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'FiSh', 'index': 'F20', 'name': 'Shelly', 'elem': 'Fire', 'class': 'Barbarian', 'rarity': 'Epic', 'gender': 'Female', 'atk': 55, 'hp': 700, 'def': 25, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.67, 'range': 170, 'move': 100, 'resist': 0.1, 'aoe': 0, 'dmg': 42.3775, 'sum': 175, 'bufftarget': 'AllEnemies', 'buffamount': -1, 'buffattribute': '-CritDmg' },
    { 'id': 'FiSp', 'index': 'F06', 'name': 'Spark', 'elem': 'Fire', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Male', 'atk': 36, 'hp': 250, 'def': 8, 'critrate': 0.25, 'critdmg': 1, 'reload': 1, 'range': 505, 'move': 170, 'resist': 0.06, 'aoe': 0, 'dmg': 45, 'sum': 77, 'bufftarget': 'FireEnemies', 'buffamount': -2, 'buffattribute': '-Atk' },
    { 'id': 'FiSy', 'index': 'F09', 'name': 'Spyro', 'elem': 'Fire', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Male', 'atk': 45, 'hp': 320, 'def': 12, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 140, 'resist': 0.08, 'aoe': 0, 'dmg': 24.75, 'sum': 101, 'bufftarget': 'Fire', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'FiTiDr', 'index': 'F01', 'name': 'Tiny Dragon', 'elem': 'Fire', 'class': 'Magician', 'rarity': 'Common', 'gender': 'Male', 'atk': 38, 'hp': 210, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 300, 'move': 180, 'resist': 0.18, 'aoe': 0, 'dmg': 43.7, 'sum': 75, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'FiTN', 'index': 'F19', 'name': 'TNT', 'elem': 'Fire', 'class': 'Gunner', 'rarity': 'Epic', 'gender': 'Male', 'atk': 40, 'hp': 220, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 480, 'move': 125, 'resist': 0.1, 'aoe': 250, 'dmg': 44, 'sum': 82, 'bufftarget': 'Fire', 'buffamount': 0.1, 'buffattribute': 'BurnTime' },
    { 'id': 'FiTo', 'index': 'F18', 'name': 'Torch', 'elem': 'Fire', 'class': 'Gunner', 'rarity': 'Epic', 'gender': 'Male', 'atk': 40, 'hp': 300, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.71, 'range': 345, 'move': 160, 'resist': 0.1, 'aoe': 400, 'dmg': 31.24, 'sum': 90, 'bufftarget': 'Fire', 'buffamount': 0.5, 'buffattribute': 'BurnDMG' },
    { 'id': 'FiVuAr', 'index': 'F03', 'name': 'Vulcan Archer', 'elem': 'Fire', 'class': 'Ranger', 'rarity': 'Common', 'gender': 'Male', 'atk': 24, 'hp': 200, 'def': 10, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 380, 'move': 150, 'resist': 0.06, 'aoe': 0, 'dmg': 27.6, 'sum': 64, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'FiVuFi', 'index': 'F04', 'name': 'Vulcan Fighter', 'elem': 'Fire', 'class': 'Rogue', 'rarity': 'Common', 'gender': 'Male', 'atk': 30, 'hp': 240, 'def': 10, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 150, 'resist': 0.06, 'aoe': 0, 'dmg': 34.5, 'sum': 74, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'FiVuHa', 'index': 'F02', 'name': 'Vulcan Hammer', 'elem': 'Fire', 'class': 'Barbarian', 'rarity': 'Common', 'gender': 'Male', 'atk': 45, 'hp': 400, 'def': 10, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.5, 'range': 130, 'move': 110, 'resist': 0.1, 'aoe': 0, 'dmg': 25.875, 'sum': 105, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'FiXa', 'index': 'F10', 'name': 'Xak', 'elem': 'Fire', 'class': 'Support', 'rarity': 'Rare', 'gender': 'Male', 'atk': 20, 'hp': 180, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 420, 'move': 170, 'resist': 0.22, 'aoe': 600, 'dmg': 14.74, 'sum': 58, 'bufftarget': 'Fire', 'buffamount': 0.25, 'buffattribute': 'Move' },
    { 'id': 'LiAn', 'index': 'L23', 'name': 'Angelica', 'elem': 'Light', 'class': 'Support', 'rarity': 'Legendary', 'gender': 'Female', 'atk': 14, 'hp': 500, 'def': 20, 'critrate': 0, 'critdmg': 1, 'reload': 0.33, 'range': 650, 'move': 100, 'resist': 0.35, 'aoe': 0, 'dmg': 4.62, 'sum': 104, 'bufftarget': 'AllTeam', 'buffamount': 5, 'buffattribute': 'HP' },
    { 'id': 'LiAr', 'index': 'L11', 'name': 'Arcana', 'elem': 'Light', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Female', 'atk': 30, 'hp': 320, 'def': 15, 'critrate': 0.25, 'critdmg': 1, 'reload': 1, 'range': 540, 'move': 150, 'resist': 0.12, 'aoe': 0, 'dmg': 37.5, 'sum': 92, 'bufftarget': 'Light', 'buffamount': 2, 'buffattribute': 'CritDmg' },
    { 'id': 'LiBiEy', 'index': 'L02', 'name': 'Big Eye', 'elem': 'Light', 'class': 'Magician', 'rarity': 'Common', 'gender': 'Male', 'atk': 25, 'hp': 450, 'def': 8, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 310, 'move': 180, 'resist': 0.26, 'aoe': 0, 'dmg': 27.5, 'sum': 86, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'LiBu', 'index': 'L09', 'name': 'Bun-gun', 'elem': 'Light', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 22, 'hp': 270, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 420, 'move': 150, 'resist': 0.15, 'aoe': 0, 'dmg': 20.086, 'sum': 69, 'bufftarget': 'Light', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'LiGoKn', 'index': 'L10', 'name': 'Gold Knight', 'elem': 'Light', 'class': 'Knight', 'rarity': 'Rare', 'gender': 'Male', 'atk': 40, 'hp': 480, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 140, 'resist': 0.12, 'aoe': 0, 'dmg': 44, 'sum': 118, 'bufftarget': 'Light', 'buffamount': 0.25, 'buffattribute': 'Move' },
    { 'id': 'LiHeBo', 'index': 'L04', 'name': 'Healer Bot', 'elem': 'Light', 'class': 'Support', 'rarity': 'Common', 'gender': 'Male', 'atk': 10, 'hp': 300, 'def': 2, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 490, 'move': 140, 'resist': 0.25, 'aoe': 0, 'dmg': 11, 'sum': 44, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'LiHi', 'index': 'L20', 'name': 'Hikari', 'elem': 'Light', 'class': 'Samurai', 'rarity': 'Epic', 'gender': 'Male', 'atk': 40, 'hp': 525, 'def': 6, 'critrate': 0.25, 'critdmg': 2, 'reload': 1, 'range': 150, 'move': 170, 'resist': 0.12, 'aoe': 0, 'dmg': 60, 'sum': 104.5, 'bufftarget': 'AllTeam', 'buffamount': 0.3, 'buffattribute': 'Move' },
    { 'id': 'LiJoOfAr', 'index': 'L07', 'name': 'Joan of Arc', 'elem': 'Light', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Female', 'atk': 28, 'hp': 500, 'def': 12, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 220, 'move': 140, 'resist': 0.12, 'aoe': 0, 'dmg': 20.636, 'sum': 102, 'bufftarget': 'Light', 'buffamount': 4, 'buffattribute': 'Def' },
    { 'id': 'LiKr', 'index': 'L06', 'name': 'Krunk', 'elem': 'Light', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 28, 'hp': 600, 'def': 14, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 410, 'move': 140, 'resist': 0.1, 'aoe': 0, 'dmg': 25.564, 'sum': 116, 'bufftarget': 'Light', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'LiLiKn', 'index': 'L01', 'name': 'Light Knight', 'elem': 'Light', 'class': 'Rogue', 'rarity': 'Common', 'gender': 'Male', 'atk': 25, 'hp': 350, 'def': 15, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 220, 'resist': 0.12, 'aoe': 0, 'dmg': 30, 'sum': 90, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'LiMe', 'index': 'L12', 'name': 'Merlinus', 'elem': 'Light', 'class': 'Support', 'rarity': 'Rare', 'gender': 'Male', 'atk': 14, 'hp': 270, 'def': 12, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 550, 'move': 100, 'resist': 0.29, 'aoe': 0, 'dmg': 10.318, 'sum': 65, 'bufftarget': 'Light', 'buffamount': 5, 'buffattribute': 'HP' },
    { 'id': 'LiMoRo', 'index': 'L19', 'name': 'Monki Roboti', 'elem': 'Light', 'class': 'Brawler', 'rarity': 'Epic', 'gender': 'Male', 'atk': 50, 'hp': 450, 'def': 20, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.77, 'range': 165, 'move': 150, 'resist': 0.25, 'aoe': 0, 'dmg': 42.35, 'sum': 135, 'bufftarget': 'AllTeam', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'LiOnEy', 'index': 'L18', 'name': 'One Eye', 'elem': 'Light', 'class': 'Rogue', 'rarity': 'Rare', 'gender': 'Male', 'atk': 32, 'hp': 480, 'def': 8, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 220, 'resist': 0.14, 'aoe': 0, 'dmg': 38.4, 'sum': 96, 'bufftarget': 'Light', 'buffamount': 0.1, 'buffattribute': 'Reload' },
    { 'id': 'LiPa', 'index': 'L21', 'name': 'Paladin', 'elem': 'Light', 'class': 'Knight', 'rarity': 'Epic', 'gender': 'Male', 'atk': 35, 'hp': 550, 'def': 40, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 140, 'resist': 0.12, 'aoe': 0, 'dmg': 38.5, 'sum': 170, 'bufftarget': 'AllTeam', 'buffamount': -0.25, 'buffattribute': 'NegEffectTime' },
    { 'id': 'LiRa', 'index': 'L14', 'name': 'Ra', 'elem': 'Light', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Male', 'atk': 38, 'hp': 190, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 350, 'move': 130, 'resist': 0.23, 'aoe': 0, 'dmg': 28.006, 'sum': 87, 'bufftarget': 'Magician', 'buffamount': 2, 'buffattribute': 'AtkHPDef' },
    { 'id': 'LiSeSh', 'index': 'L13', 'name': 'Ser Shu', 'elem': 'Light', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Male', 'atk': 30, 'hp': 430, 'def': 32, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.71, 'range': 340, 'move': 140, 'resist': 0.12, 'aoe': 400, 'dmg': 23.43, 'sum': 137, 'bufftarget': 'Lancer', 'buffamount': 0.03, 'buffattribute': 'Range' },
    { 'id': 'LiSe', 'index': 'L16', 'name': 'Seraph', 'elem': 'Light', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Female', 'atk': 38, 'hp': 250, 'def': 10, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 520, 'move': 120, 'resist': 0.1, 'aoe': 0, 'dmg': 45.6, 'sum': 83, 'bufftarget': 'Ranger', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'LiSi', 'index': 'L17', 'name': 'Siegfried', 'elem': 'Light', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 32, 'hp': 780, 'def': 14, 'critrate': 0.25, 'critdmg': 1, 'reload': 0.83, 'range': 200, 'move': 125, 'resist': 0.14, 'aoe': 350, 'dmg': 33.2, 'sum': 138, 'bufftarget': 'Self', 'buffamount': 8, 'buffattribute': 'HP' },
    { 'id': 'LiSp', 'index': 'L05', 'name': 'Spike', 'elem': 'Light', 'class': 'Barbarian', 'rarity': 'Common', 'gender': 'Male', 'atk': 26, 'hp': 580, 'def': 30, 'critrate': 0.25, 'critdmg': 1, 'reload': 0.83, 'range': 200, 'move': 140, 'resist': 0.14, 'aoe': 350, 'dmg': 26.975, 'sum': 144, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'LiSw', 'index': 'L03', 'name': 'Swift', 'elem': 'Light', 'class': 'Ranger', 'rarity': 'Common', 'gender': 'Female', 'atk': 24, 'hp': 250, 'def': 10, 'critrate': 0.05, 'critdmg': 1, 'reload': 1.25, 'range': 380, 'move': 160, 'resist': 0.06, 'aoe': 0, 'dmg': 31.5, 'sum': 69, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'LiTaSu', 'index': 'L08', 'name': 'Tan Suu', 'elem': 'Light', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Male', 'atk': 30, 'hp': 410, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 450, 'move': 130, 'resist': 0.3, 'aoe': 0, 'dmg': 22.11, 'sum': 91, 'bufftarget': 'Light', 'buffamount': -0.2, 'buffattribute': 'ElementalDMG' },
    { 'id': 'LiTe', 'index': 'L22', 'name': 'Tesla', 'elem': 'Light', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Female', 'atk': 36, 'hp': 360, 'def': 6, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 390, 'move': 160, 'resist': 0.19, 'aoe': 150, 'dmg': 35.856, 'sum': 84, 'bufftarget': 'Self', 'buffamount': 8, 'buffattribute': 'Atk' },
    { 'id': 'LiTh', 'index': 'L15', 'name': 'Thor', 'elem': 'Light', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 48, 'hp': 600, 'def': 14, 'critrate': 0.25, 'critdmg': 1, 'reload': 0.5, 'range': 200, 'move': 100, 'resist': 0.16, 'aoe': 0, 'dmg': 30, 'sum': 136, 'bufftarget': 'Light', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'PlCl', 'index': 'P20', 'name': 'Clawdette', 'elem': 'Plant', 'class': 'Brawler', 'rarity': 'Epic', 'gender': 'Female', 'atk': 45, 'hp': 410, 'def': 18, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 175, 'move': 145, 'resist': 0.26, 'aoe': 0, 'dmg': 54, 'sum': 122, 'bufftarget': 'AllTeam', 'buffamount': 0.5, 'buffattribute': 'PoisonDMG' },
    { 'id': 'PlGl', 'index': 'P10', 'name': 'Gladiator', 'elem': 'Plant', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 42, 'hp': 840, 'def': 25, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.67, 'range': 150, 'move': 100, 'resist': 0.12, 'aoe': 350, 'dmg': 32.361, 'sum': 176, 'bufftarget': 'Plant', 'buffamount': 4, 'buffattribute': 'HP' },
    { 'id': 'PlGrFa', 'index': 'P21', 'name': 'Green Faery', 'elem': 'Plant', 'class': 'Support', 'rarity': 'Epic', 'gender': 'Female', 'atk': 20, 'hp': 250, 'def': 14, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.5, 'range': 460, 'move': 150, 'resist': 0.29, 'aoe': 0, 'dmg': 12, 'sum': 73, 'bufftarget': 'AllTeam', 'buffamount': 4, 'buffattribute': 'HP' },
    { 'id': 'PlGr', 'index': 'P07', 'name': 'Groovine', 'elem': 'Plant', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Female', 'atk': 48, 'hp': 350, 'def': 9, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 550, 'move': 140, 'resist': 0.24, 'aoe': 0, 'dmg': 52.8, 'sum': 101, 'bufftarget': 'Plant', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'PlHo', 'index': 'P16', 'name': 'Hooky', 'elem': 'Plant', 'class': 'Gunner', 'rarity': 'Epic', 'gender': 'Male', 'atk': 30, 'hp': 420, 'def': 20, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 450, 'move': 125, 'resist': 0.1, 'aoe': 0, 'dmg': 27.39, 'sum': 112, 'bufftarget': 'Plant', 'buffamount': 0.03, 'buffattribute': 'Range' },
    { 'id': 'PlKr', 'index': 'P12', 'name': 'Krouki', 'elem': 'Plant', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 38, 'hp': 280, 'def': 10, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 490, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 37.848, 'sum': 86, 'bufftarget': 'Plant', 'buffamount': 2, 'buffattribute': 'CritDmg' },
    { 'id': 'PlLeBl', 'index': 'P17', 'name': 'Leaf Blade', 'elem': 'Plant', 'class': 'Knight', 'rarity': 'Epic', 'gender': 'Male', 'atk': 50, 'hp': 370, 'def': 16, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 140, 'resist': 0.11, 'aoe': 0, 'dmg': 57.5, 'sum': 119, 'bufftarget': 'AllTeam', 'buffamount': 4, 'buffattribute': 'Def' },
    { 'id': 'PlLy', 'index': 'P22', 'name': 'Lycan', 'elem': 'Plant', 'class': 'Brawler', 'rarity': 'Epic', 'gender': 'Male', 'atk': 45, 'hp': 500, 'def': 18, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 180, 'move': 145, 'resist': 0.26, 'aoe': 0, 'dmg': 54, 'sum': 131, 'bufftarget': 'Plant', 'buffamount': 0.1, 'buffattribute': 'Reload' },
    { 'id': 'PlMi', 'index': 'P13', 'name': 'Misty', 'elem': 'Plant', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Female', 'atk': 20, 'hp': 280, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.83, 'range': 410, 'move': 150, 'resist': 0.12, 'aoe': 150, 'dmg': 19.09, 'sum': 64, 'bufftarget': 'Plant', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'PlMu', 'index': 'P09', 'name': 'Musashi', 'elem': 'Plant', 'class': 'Samurai', 'rarity': 'Rare', 'gender': 'Male', 'atk': 50, 'hp': 300, 'def': 8, 'critrate': 0.25, 'critdmg': 2, 'reload': 1, 'range': 150, 'move': 170, 'resist': 0.08, 'aoe': 0, 'dmg': 75, 'sum': 96, 'bufftarget': 'Plant', 'buffamount': 0.25, 'buffattribute': 'Move' },
    { 'id': 'PlNa', 'index': 'P05', 'name': 'Natura', 'elem': 'Plant', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Female', 'atk': 34, 'hp': 440, 'def': 12, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.67, 'range': 240, 'move': 140, 'resist': 0.08, 'aoe': 300, 'dmg': 25.058, 'sum': 102, 'bufftarget': 'Plant', 'buffamount': 4, 'buffattribute': 'Def' },
    { 'id': 'PlPe', 'index': 'P19', 'name': 'Petunia', 'elem': 'Plant', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Female', 'atk': 45, 'hp': 300, 'def': 16, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.5, 'range': 405, 'move': 180, 'resist': 0.19, 'aoe': 0, 'dmg': 27, 'sum': 107, 'bufftarget': 'AllTeam', 'buffamount': 5, 'buffattribute': 'Def' },
    { 'id': 'PlPi', 'index': 'P06', 'name': 'Pinky', 'elem': 'Plant', 'class': 'Rogue', 'rarity': 'Rare', 'gender': 'Male', 'atk': 42, 'hp': 200, 'def': 12, 'critrate': 0.35, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 230, 'resist': 0.14, 'aoe': 0, 'dmg': 56.7, 'sum': 86, 'bufftarget': 'Rogue', 'buffamount': 2, 'buffattribute': 'AtkHPDef' },
    { 'id': 'PlPu', 'index': 'P15', 'name': 'PumpKing', 'elem': 'Plant', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 40, 'hp': 550, 'def': 20, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.83, 'range': 220, 'move': 100, 'resist': 0.1, 'aoe': 440, 'dmg': 38.18, 'sum': 135, 'bufftarget': 'Plant', 'buffamount': 0.5, 'buffattribute': 'PoisonDMG' },
    { 'id': 'PlRoHo', 'index': 'P08', 'name': 'Robin Hood', 'elem': 'Plant', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Male', 'atk': 30, 'hp': 270, 'def': 6, 'critrate': 0.25, 'critdmg': 1, 'reload': 1, 'range': 590, 'move': 160, 'resist': 0.08, 'aoe': 0, 'dmg': 37.5, 'sum': 69, 'bufftarget': 'Plant', 'buffamount': 2, 'buffattribute': 'CritDmg' },
    { 'id': 'PlSp', 'index': 'P01', 'name': 'Sprout', 'elem': 'Plant', 'class': 'Magician', 'rarity': 'Common', 'gender': 'Male', 'atk': 34, 'hp': 260, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 370, 'move': 180, 'resist': 0.22, 'aoe': 0, 'dmg': 39.1, 'sum': 76, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'PlTe', 'index': 'P11', 'name': 'Tellus', 'elem': 'Plant', 'class': 'Brawler', 'rarity': 'Rare', 'gender': 'Male', 'atk': 52, 'hp': 480, 'def': 28, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.67, 'range': 180, 'move': 140, 'resist': 0.15, 'aoe': 0, 'dmg': 40.066, 'sum': 156, 'bufftarget': 'Plant', 'buffamount': 4, 'buffattribute': 'Def' },
    { 'id': 'PlTh', 'index': 'P18', 'name': 'Thorn', 'elem': 'Plant', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Female', 'atk': 40, 'hp': 400, 'def': 6, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 500, 'move': 160, 'resist': 0.2, 'aoe': 600, 'dmg': 46, 'sum': 92, 'bufftarget': 'PlantEnemies', 'buffamount': -2, 'buffattribute': '-Atk' },
    { 'id': 'PlVoAr', 'index': 'P04', 'name': 'Voodoo Archer', 'elem': 'Plant', 'class': 'Ranger', 'rarity': 'Common', 'gender': 'Male', 'atk': 24, 'hp': 240, 'def': 6, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 425, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 27.6, 'sum': 60, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'PlVoDa', 'index': 'P02', 'name': 'Voodoo Dagger', 'elem': 'Plant', 'class': 'Rogue', 'rarity': 'Common', 'gender': 'Male', 'atk': 35, 'hp': 200, 'def': 8, 'critrate': 0.35, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 220, 'resist': 0.14, 'aoe': 0, 'dmg': 47.25, 'sum': 71, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'PlVoSp', 'index': 'P03', 'name': 'Voodoo Spear', 'elem': 'Plant', 'class': 'Lancer', 'rarity': 'Common', 'gender': 'Male', 'atk': 32, 'hp': 320, 'def': 6, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 18.4, 'sum': 76, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'PlWo', 'index': 'P14', 'name': 'Wolfie', 'elem': 'Plant', 'class': 'Barbarian', 'rarity': 'Rare', 'gender': 'Male', 'atk': 35, 'hp': 600, 'def': 16, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 220, 'move': 130, 'resist': 0.1, 'aoe': 150, 'dmg': 34.86, 'sum': 127, 'bufftarget': 'Plant', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'WaAk', 'index': 'W14', 'name': 'Akwa', 'elem': 'Water', 'class': 'Brawler', 'rarity': 'Rare', 'gender': 'Female', 'atk': 48, 'hp': 360, 'def': 20, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 200, 'move': 140, 'resist': 0.24, 'aoe': 0, 'dmg': 57.6, 'sum': 124, 'bufftarget': 'Water', 'buffamount': 0.1, 'buffattribute': 'Reload' },
    { 'id': 'WaAt', 'index': 'W06', 'name': 'Atlantus', 'elem': 'Water', 'class': 'Lancer', 'rarity': 'Rare', 'gender': 'Male', 'atk': 40, 'hp': 430, 'def': 12, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.4, 'range': 225, 'move': 140, 'resist': 0.15, 'aoe': 350, 'dmg': 19.2, 'sum': 107, 'bufftarget': 'Water', 'buffamount': 2, 'buffattribute': 'CritDmg' },
    { 'id': 'WaBlBe', 'index': 'W13', 'name': 'Black Beard', 'elem': 'Water', 'class': 'Knight', 'rarity': 'Rare', 'gender': 'Male', 'atk': 45, 'hp': 360, 'def': 12, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 51.75, 'sum': 105, 'bufftarget': 'Water', 'buffamount': 4, 'buffattribute': 'Def' },
    { 'id': 'WaBlFi', 'index': 'W02', 'name': 'Blue Fish', 'elem': 'Water', 'class': 'Magician', 'rarity': 'Common', 'gender': 'Male', 'atk': 32, 'hp': 310, 'def': 8, 'critrate': 0.15, 'critdmg': 1, 'reload': 1, 'range': 350, 'move': 250, 'resist': 0.22, 'aoe': 0, 'dmg': 36.8, 'sum': 79, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'WaBuAr', 'index': 'W01', 'name': 'Bugonaut Archer', 'elem': 'Water', 'class': 'Ranger', 'rarity': 'Common', 'gender': 'Male', 'atk': 28, 'hp': 200, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 424, 'move': 160, 'resist': 0.1, 'aoe': 0, 'dmg': 30.8, 'sum': 78, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'WaBuFi', 'index': 'W03', 'name': 'Bugonaut Fighter', 'elem': 'Water', 'class': 'Rogue', 'rarity': 'Common', 'gender': 'Male', 'atk': 30, 'hp': 240, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 150, 'resist': 0.1, 'aoe': 0, 'dmg': 33, 'sum': 84, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'WaBuGi', 'index': 'W05', 'name': 'Bugonaut Giant', 'elem': 'Water', 'class': 'Barbarian', 'rarity': 'Common', 'gender': 'Male', 'atk': 35, 'hp': 400, 'def': 20, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.5, 'range': 160, 'move': 100, 'resist': 0.06, 'aoe': 150, 'dmg': 21, 'sum': 115, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'WaBuSp', 'index': 'W04', 'name': 'Bugonaut Spear', 'elem': 'Water', 'class': 'Lancer', 'rarity': 'Common', 'gender': 'Male', 'atk': 28, 'hp': 280, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.5, 'range': 220, 'move': 110, 'resist': 0.1, 'aoe': 0, 'dmg': 15.4, 'sum': 86, 'bufftarget': '-none-', 'buffamount': 0, 'buffattribute': '-none-' },
    { 'id': 'WaFrQu', 'index': 'W20', 'name': 'Frost Queen', 'elem': 'Water', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Female', 'atk': 28, 'hp': 280, 'def': 12, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 520, 'move': 150, 'resist': 0.08, 'aoe': 0, 'dmg': 33.6, 'sum': 80, 'bufftarget': 'Water', 'buffamount': 1, 'buffattribute': 'FreezeDMG' },
    { 'id': 'WaGo', 'index': 'W11', 'name': 'Goddess', 'elem': 'Water', 'class': 'Support', 'rarity': 'Rare', 'gender': 'Female', 'atk': 14, 'hp': 200, 'def': 10, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.5, 'range': 520, 'move': 140, 'resist': 0.26, 'aoe': 0, 'dmg': 7.7, 'sum': 54, 'bufftarget': 'Water', 'buffamount': 4, 'buffattribute': 'HP' },
    { 'id': 'WaIcCu', 'index': 'W19', 'name': 'Ice Cube', 'elem': 'Water', 'class': 'Barbarian', 'rarity': 'Epic', 'gender': 'Male', 'atk': 45, 'hp': 710, 'def': 14, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 150, 'move': 100, 'resist': 0.1, 'aoe': 150, 'dmg': 41.085, 'sum': 144, 'bufftarget': 'AllTeam', 'buffamount': 4, 'buffattribute': 'Def' },
    { 'id': 'WaIcKn', 'index': 'W08', 'name': 'Ice Knight', 'elem': 'Water', 'class': 'Knight', 'rarity': 'Rare', 'gender': 'Male', 'atk': 48, 'hp': 370, 'def': 15, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 150, 'move': 135, 'resist': 0.25, 'aoe': 0, 'dmg': 52.8, 'sum': 115, 'bufftarget': 'Water', 'buffamount': 0.04, 'buffattribute': 'FreezeTime' },
    { 'id': 'WaLu', 'index': 'W15', 'name': 'Luka', 'elem': 'Water', 'class': 'Rogue', 'rarity': 'Rare', 'gender': 'Male', 'atk': 37, 'hp': 240, 'def': 8, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 120, 'move': 220, 'resist': 0.15, 'aoe': 0, 'dmg': 44.4, 'sum': 77, 'bufftarget': 'Water', 'buffamount': 0.25, 'buffattribute': 'Move' },
    { 'id': 'WaMa', 'index': 'W18', 'name': 'Manta', 'elem': 'Water', 'class': 'Magician', 'rarity': 'Epic', 'gender': 'Female', 'atk': 45, 'hp': 350, 'def': 8, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 410, 'move': 160, 'resist': 0.2, 'aoe': 0, 'dmg': 49.5, 'sum': 96, 'bufftarget': 'AllEnemies', 'buffamount': -1, 'buffattribute': 'AoE' },
    { 'id': 'WaMi', 'index': 'W16', 'name': 'Mizu', 'elem': 'Water', 'class': 'Samurai', 'rarity': 'Rare', 'gender': 'Male', 'atk': 56, 'hp': 260, 'def': 8, 'critrate': 0.25, 'critdmg': 2, 'reload': 1, 'range': 170, 'move': 150, 'resist': 0.06, 'aoe': 0, 'dmg': 84, 'sum': 98, 'bufftarget': 'Water', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'WaNa', 'index': 'W17', 'name': 'Namida', 'elem': 'Water', 'class': 'Gunner', 'rarity': 'Epic', 'gender': 'Female', 'atk': 25, 'hp': 320, 'def': 6, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.83, 'range': 415, 'move': 160, 'resist': 0.08, 'aoe': 0, 'dmg': 23.8625, 'sum': 69, 'bufftarget': 'WaterEnemies', 'buffamount': -2, 'buffattribute': '-Atk' },
    { 'id': 'WaOc', 'index': 'W10', 'name': 'Oceana', 'elem': 'Water', 'class': 'Magician', 'rarity': 'Rare', 'gender': 'Female', 'atk': 40, 'hp': 360, 'def': 8, 'critrate': 0.2, 'critdmg': 1, 'reload': 0.83, 'range': 480, 'move': 160, 'resist': 0.2, 'aoe': 0, 'dmg': 39.84, 'sum': 92, 'bufftarget': 'Water', 'buffamount': 4, 'buffattribute': 'HP' },
    { 'id': 'WaPi', 'index': 'W09', 'name': 'Pirato', 'elem': 'Water', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 28, 'hp': 200, 'def': 6, 'critrate': 0.1, 'critdmg': 1, 'reload': 0.83, 'range': 420, 'move': 180, 'resist': 0.1, 'aoe': 150, 'dmg': 25.564, 'sum': 60, 'bufftarget': 'Water', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'WaRu', 'index': 'W07', 'name': 'Rufus', 'elem': 'Water', 'class': 'Gunner', 'rarity': 'Rare', 'gender': 'Male', 'atk': 40, 'hp': 240, 'def': 10, 'critrate': 0.15, 'critdmg': 1, 'reload': 0.83, 'range': 480, 'move': 160, 'resist': 0.06, 'aoe': 0, 'dmg': 38.18, 'sum': 84, 'bufftarget': 'Water', 'buffamount': 4, 'buffattribute': 'CritDmg' },
    { 'id': 'WaSn', 'index': 'W12', 'name': 'Snowman', 'elem': 'Water', 'class': 'Ranger', 'rarity': 'Rare', 'gender': 'Male', 'atk': 30, 'hp': 280, 'def': 11, 'critrate': 0.1, 'critdmg': 1, 'reload': 1, 'range': 440, 'move': 140, 'resist': 0.15, 'aoe': 0, 'dmg': 33, 'sum': 80, 'bufftarget': 'Water', 'buffamount': 4, 'buffattribute': 'Atk' },
    { 'id': 'WaVa', 'index': 'W21', 'name': 'Valkyrie', 'elem': 'Water', 'class': 'Ranger', 'rarity': 'Epic', 'gender': 'Female', 'atk': 32, 'hp': 280, 'def': 12, 'critrate': 0.2, 'critdmg': 1, 'reload': 1, 'range': 550, 'move': 150, 'resist': 0.08, 'aoe': 0, 'dmg': 38.4, 'sum': 84, 'bufftarget': 'AllTeam', 'buffamount': 3, 'buffattribute': 'CritDmg' }
];

console.log(" ─── Start ─── ");
const resPath = "../../semester-project/res";
// hero_img.src = `res/cta-hero-icon/${h.name}.png`;

const Elems = ["Dark", "Fire", "Light", "Plant", "Water"];

const cardStats = ["Atk", "HP", "Def", "CritRate", "CritDmg", "Reload", "Range", "Move", "Resist", "Frenzy", "Dogde", "StunChance", "StunTime", "AoE", "AoE_Dmg", "UltimateAtk", "KnightShieldHP", "BonusGold", "FreezeChance", "FreezeTime", "FreezeDmg", "BurnChance", "BurnTime", "BurnDmg", "PoisonChance", "PoisonTime", "PoisonDmg"];

const AuraEffects = ["AoE", "Atk", "AtkHPDef", "BurnDMG", "BurnTime", "CritDmg", "Def", "Dogde", "FreezeDMG", "FreezeTime", "Frenzy", "HP", "Move", "PoisonDMG", "Range", "Reload", "Resist", "Shield"];
const auraClasses = ["Gunner", "Magician", "Lancer", "Ranger", "Rogue"];
const auraSpecial = ["AllTeam", , "AllEnemies"];

const mainAura = ["Atk", "HP", "Def", "CritDmg", "Reload", "Move", "Resist"];
// ───────────────  ───────────────  ─────────────── //
let hero = {};
heroList.forEach(h => {
    hero[h.id] = {};
    Object.keys(h).forEach(att => {
        hero[h.id][att] = h[att];
    });
});

let fhero = {};
let fheroIDs = [];
let fbuffs = {};
let fbuffEach = {};

function setUpBuffs(){
    // -- Aura Buffs -- //
    fbuffs["AllTeam"] = { "Atk": 0, "HP": 0, "Def": 0, "CritDmg": 0, "Reload": 0, "Move": 0, "Resist": 0 };
    Elems.forEach(elem => {
        fbuffs[elem] = { "Atk": 0, "HP": 0, "Def": 0, "CritDmg": 0, "Reload": 0, "Move": 0 };
    });
    fbuffs["-none-"] = { "-none-": -1 };
    heroList.forEach(h => {
        let buffTar = h.bufftarget;
        let buffAtt = h.buffattribute;
        if (!Object.keys(fbuffs).includes(buffTar)) {
            fbuffs[buffTar] = {};
            fbuffs[buffTar][buffAtt] = 0;
        } else {
            if (!Object.keys(fbuffs[buffTar]).includes(buffAtt)) {
                fbuffs[buffTar][buffAtt] = 0;
            }
        }
    });
    // fbuffs["Dark"]["CritDmg"] = 0;
    // fbuffs["Dark"]["Reload"] = 0;
}
setUpBuffs();

// ───────────────  ───────────────  ─────────────── //
// -- Selections:

const heroTableID = "hl";
const formationTableID = "f";

const colnames = [
    "id", "index", "name", "elem", "class", "rarity", "gender",
    "atk", "hp", "def", "critrate", "critdmg", "reload",
    "range", "move", "resist", "aoe", "dmg", "sum",
    "buffaffected", "buffamount", "bufftarget"
];
// -- columns to display.
let col_start = [
    "index",
    "atk", "hp", "def",
    "dmg", "sum"
];
// -- items that are shown as percentage.
let col_percent = [
    "critrate", "critdmg",
    "resist",
    "buffamount"
];
// -- stats that will be added in the formation sum.
// -- instead of calculating the average.
let sumStats = [
    "atk", "hp", "def",
    "dmg", "sum"
];
// -- column background 2:
const col_back = [
    "atk", "hp", "def", "critrate", "critdmg", "reload",
    "range", "move", "resist", "aoe"
];

// -- to allow a different color background for dmg and sum.
let col_special = [
    "index",
    "dmg", "sum"
];

// -- to better track the column of the 3 main attributes.
let col_row_emoji = {
    "atk": "⚔️", "hp": "❤️", "def": "🛡️"
}
// -- to know which columns are text
const col_text = [
    "id", "index", "name", "elem", "class", "rarity", "gender",
    "buffaffected", "bufftarget"
];

// -- columns that have a btn style for their headers.
let sort_ready = ["atk", "hp", "def", "dmg", "sum"];

// -- columns that have emojis.
const col_icons = [
    "awaken", "star",
    "atk", "hp", "def"
];

let col_update = [
    "atk", "hp", "def",
    "dmg", "sum"
];

// ───────────────  ───────────────  ─────────────── //

// MakeTable() Does →
// • Makes a 'table' with a 'thead' and a 'tbody'.
// • Gives the 'tbody' an id to add rows to it.
// • Makes the 'thead' stiky, so it remain always on top.
// Needs →
// • A list of column names.
// • A 'tid' to identify the table and the data in it.

/* ─────────────── Functions ─────────────── */

// formationTable
// heroTable
function MakeTable(parentId, columns, tid) {
    let htable = document.getElementById(parentId);
    htable.classList.add('htable');
    if (htable.classList.contains('hidden') && tid == formationTableID && fheroIDs.length > 0) {
        htable.classList.remove('hidden');
    }

    let thead = document.createElement('thead');
    thead.classList.add('sticky-headers');
    htable.appendChild(thead);

    let tbody = document.createElement('tbody');
    tbody.id = `${tid}-tbody`;
    tbody.classList.add('scroll-tbody');
    htable.appendChild(tbody);

    // -- Header -- //
    let hrow = document.createElement('tr');
    hrow.id = `${tid}-thead-tr`;
    columns.forEach(col => {
        let th = document.createElement('th');
        th.classList.add(`${tid}-thead-tr-th`, `${tid}-col-${col}`);

        let th_div = document.createElement('div');
        th_div.innerText = col;
        th_div.classList.add(`sortbtn`);

        // -- to add icons ↓
        if (col_icons.includes(col)) {
            th_div.innerHTML = `${col}<img src="${resPath}/other-icons/${col}.png" alt="${col}" height="28" width="28" data-sort="${col}">`;
        }

        // -- to add a specific style ↓
        if (sort_ready.includes(col)) {
            th_div.classList.add(`sort${col}`);
        } else { th_div.classList.add(`sortid`); }

        th.appendChild(th_div);
        hrow.appendChild(th);
    });
    thead.appendChild(hrow);
}

function MakeRows(tid) {
    // let tbody = document.getElementById(`${tid}-tbody`);
    heroList.forEach(h => {
        MakeRow(h.id);
    });
}

// • Returns the dom element of a row.
function MakeRow(heroid, columns = col_start) {
    let tid = heroTableID;
    if (fheroIDs.includes(heroid)) {
        tid = formationTableID;
    }
    let tbody = document.getElementById(`${tid}-tbody`);

    let row = document.createElement('tr');
    let h = hero[heroid];
    // row.id = h.index;
    row.id = `row-${h.id}`;
    row.dataset.heroId = h.id;
    row.dataset.heroIndex = h.index;
    columns.forEach(col => {
        let td = document.createElement('td');
        // -- adding classes based on column and row to toggle.
        // td.classList.add(`${tid}-col-${col}`,`${tid}-row-${h.index}`);
        td.classList.add(`col-${col}`, `row-${h.id}`);
        // td.classList.add('td-class');
        // td.innerText = h[col];
        td.dataset.col = col;

        // -- ↓ This adds a special style.
        // -- ↓ for: (dmg, sum);
        if (col_special.includes(col)) {
            td.classList.add(`row-bg-${col}`);
        }

        // -- ↓ This adds the background class.
        if (col_back.includes(col)) {
            // -- background 2 is single color.
            td.classList.add(`row-bg2-${h.elem}`);
        } else {
            // -- background matches element color.
            td.classList.add(`row-bg-${h.elem}`);
        }

        // -- This is the div
        let td_div = document.createElement('div');
        // td_div.innerText = col;

        let stat = h[col];
        if (col_percent.includes(col)) {
            stat = h[col] * 100;
            stat += "%"
        }
        if (col == "reload") {
            stat = h[col].toLocaleString(undefined, { minimumFractionDigits: 2 });
        }
        let td_div_stat = document.createElement('td');
        if (col == "index") {
            td_div.innerText = "";
            let hero_img = document.createElement('img');
            hero_img.classList.add("heroimg", "heroimg_hide");
            hero_img.src = `${resPath}/cta-hero-icon/${h.name}.png`;
            hero_img.alt = h[col];
            hero_img.id = `img-${h.id}`;
            hero_img.dataset.heroLocation = `${tid}-tbody`;
            hero_img.dataset.heroIndex = h.index;
            hero_img.dataset.heroId = h.id;
            td_div.appendChild(hero_img);
            td_div.classList.add('centerAll', 'td-class');
        } else if (Object.keys(col_row_emoji).includes(col)) {
            let td_div_emoji = document.createElement('td');
            td_div_emoji.innerText = col_row_emoji[col];
            td_div.appendChild(td_div_emoji);
            // let td_div_stat = document.createElement('td');
            // td_div.innerText = col_row_emoji[col] + stat;
            td_div_stat.innerText = stat;
        } else if (col == "dmg" || col == "sum") {
            td_div_stat.innerText = Math.round(stat, 2);
        } else {
            td_div_stat.innerText = stat;
        }
        td_div_stat.classList.add(`stat-${col}`);
        td_div.appendChild(td_div_stat);

        td.appendChild(td_div);
        row.appendChild(td);
    });
    tbody.appendChild(row);
}

function buildSumRow(columns = col_start, tid) {
    let fbody = document.getElementById(`${tid}-tbody`);
    let sum = { 'atk': 0, 'hp': 0, 'def': 0, 'critrate': 0, 'critdmg': 0, 'reload': 0, 'range': 0, 'move': 0, 'resist': 0, 'aoe': 0, 'dmg': 0, 'sum': 0 }
    let keysToAdd = Object.keys(sum);
    // fheroIDs.forEach(heroid => {
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
    columns.forEach(col => {
        let td = document.createElement('td');
        td.classList.add(`fcol-${col}`, `frow-sum`);
        td.dataset.col = col;

        // -- ↓ This adds a special style.
        if (col_special.includes(col)) {
            td.classList.add(`row-bg-${col}`);
        }

        // -- ↓ This adds the background class.
        if (col_back.includes(col)) {
            td.classList.add(`row-bg2-sum`);
        } else {
            td.classList.add(`row-bg-sum`);
        }

        // -- This is the div
        let td_div = document.createElement('div');
        td_div.id = `sum-${col}`;

        // -- Operate the stats.
        let stat = "";
        if (col == "name") { stat = "Sum" }
        // if(col == "elem") {stat = "Mostly... ${which repeats the most.}"}
        if (col_percent.includes(col)) {
            stat = sum[col] * 100;
            stat += "%"
        }
        if (col == "reload") {
            stat = sum[col].toLocaleString(undefined, { minimumFractionDigits: 2 });
        }

        // -- Fill the table.
        if (col == "index") {
            td_div.innerText = "";
            hero_img = document.createElement('img');
            hero_img.classList.add("heroimg", "heroimg_hide");
            hero_img.src = `${resPath}/other-icons/player.png`;
            hero_img.alt = "sum of formation";
            hero_img.id = `img-sum`;
            td_div.appendChild(hero_img);
        } else {
            td_div.innerText = stat;
        }
        
        // else if (Object.keys(col_row_emoji).includes(col)) {
        //     td_div.innerText = col_row_emoji[col] + stat;
        // } else {
        //     td_div.innerText = stat;
        // }

        // -- ↓ This centers the text.
        if (col_back.includes(col)) {
            td_div.classList.add(`text-center`);
        }

        td.appendChild(td_div);
        frow.appendChild(td);
    });
    fbody.appendChild(frow);
    // let formation = document.querySelectorAll('.row-in-fbody');
}

function updateSumRow() {
    let fbody = document.getElementById(`${formationTableID}-fbody`);
    // let sum = {'atk': 0, 'hp': 0, 'def': 0, 'critrate': 0, 'critdmg': 0, 'reload': 0, 
    // 'range': 0, 'move': 0, 'resist': 0, 'aoe': 0, 'dmg': 0, 'sum': 0}
    let sum = { 'atk': 0, 'hp': 0, 'def': 0, 'dmg': 0, 'sum': 0 }
    let keysToAdd = Object.keys(sum);
    colnames.forEach(col => {
        sum[col] = 0;
        if (col_text.includes(col)) {
            sum[col] = "";
        }
    });

    resetStats();
    updateFormation();
    // shortNumb(n)
    // n = Number.parseFloat(n).toFixed(2);


    // -- Calc Sum -- 
    fheroIDs.forEach(id => {
        keysToAdd.forEach(att => {
            sum[att] += fhero[id][att];
        });
    });
    let formation_count = fheroIDs.length;
    keysToAdd.forEach(col => {
        let divAtt = document.getElementById(`sum-${col}`);
        let stat = sum[col] / formation_count;

        if (sumStats.includes(col)) {
            stat = Math.round(sum[col], 2);
        } else {
            stat = Math.round(sum[col] / formation_count, 2);
        }

        if (col_percent.includes(col)) {
            // stat = sum[col]*100;
            // stat = stat/formation_count;
            stat = Math.round((sum[col] / formation_count) * 100, 2);
            stat += "%"
        }
        if (col == "reload") {
            stat = sum[col] / formation_count;
            stat = Number.parseFloat(stat).toFixed(2);
        }

        let shortStat = shortNumb(stat);
        // -- Assigning to the DOM element;
        // if (Object.keys(col_row_emoji).includes(col)) {
        //     divAtt.innerText = col_row_emoji[col] + shortStat[0] + shortStat[1];
        // } else {
        //     divAtt.innerText = shortStat[0] + shortStat[1];
        // }
        divAtt.innerText = shortStat[0] + shortStat[1];
    });
}


function toggleHero(heroID) {
    if (document.getElementById('formationTable').classList.contains('hidden')) {
        document.getElementById('formationTable').classList.remove('hidden');
    }

    let fbody = document.getElementById(`${formationTableID}-tbody`);
    let tbody = document.getElementById(`${heroTableID}-tbody`);
    let hero_row = document.getElementById(`row-${heroID}`);
    let hero_img = document.getElementById(`img-${heroID}`);
    let sum_row = document.getElementById(`frow-sum`);

    let formationCount = fbody.children.length - 1;
    // console.log(formationCount);

    // -- if clicked is in 'tbody', and there are less then 11 in 'fbody';
    if (hero_img.dataset.heroLocation == `${heroTableID}-tbody` && formationCount < 11) {
        // -- Add to formation.
        fbody.appendChild(hero_row);
        hero_row.classList.remove = "row-in-tbody";
        hero_row.classList.add = "row-in-fbody";
        hero_img.dataset.heroLocation = `${formationTableID}-tbody`;
        if (!fheroIDs.includes(heroID)) {
            fheroIDs.push(heroID);
        }
    } else {
        // -- Remove from formation.
        tbody.appendChild(hero_row);
        hero_row.classList.add = "row-in-tbody";
        hero_row.classList.remove = "row-in-fbody";
        hero_img.dataset.heroLocation = `${heroTableID}-tbody`;
        fheroIDs.splice(fheroIDs.indexOf(heroID), 1);
    }
    formationCount = fbody.children.length - 1;
    console.log(formationCount);

    fbody.appendChild(sum_row);
    // updateSumRow();
}


function toggleColBy(query_to_find, class_to_toggle) {
    let queryResult = document.querySelectorAll(`${query_to_find}`);
    queryResult.forEach(each => {
        each.classList.toggle(class_to_toggle);
    });
}

function saveFormation() {
    localStorage.setItem("formation", JSON.stringify(fheroIDs));
}

/* ─────────────── Stats Functions ─────────────── */
//-- Calc Awaken and Star levels 'awst'
let awstats = ["atk", "hp", "def"];
function calcStat(stat, aw, st) {
    return stat * (2 ** (st - 1)) * (1.5 ** aw);
}
function calcStats(rhero) {
    let aw = Math.floor(rhero.awst / 10);
    let st = rhero.awst % 10;
    awstats.forEach(stat => {
        rhero[stat] = calcStat(rhero[stat], aw, st);
    });
    rhero["buffamount"] = rhero["buffamount"] * 4;
}

let sumBalance = { "atk": 1, "hp": 0.1, "def": 2 };
function calcDamage(rhero) {
    rhero.dmg = (rhero.atk * rhero.reload) * ((rhero.critrate * rhero.critdmg) + 1);
    // console.log(`${rhero.name}.dmg: ${rhero.dmg} → (${rhero.atk} x ${rhero.reload}) x ((${rhero.critrate} x ${rhero.critdmg}) +1)`);
    return rhero.dmg;
}
function calcSum(rhero) {
    calcDamage(rhero);
    rhero.sum = (rhero.dmg * sumBalance.atk) + (rhero.hp * sumBalance.hp) + (rhero.def * sumBalance.def);
    // console.log(`${rhero.name}.dmg: ${rhero.sum} → (${rhero.dmg} x ${sumBalance.atk}) + (${rhero.hp} x ${sumBalance.hp}) + (${rhero.def} x ${sumBalance.def})`);
    return rhero.sum;
}

function resetStats(){
    fheroIDs.forEach(id => {
        fhero[id] = {};
        Object.keys(hero[id]).forEach(att => {
            fhero[id][att] = hero[id][att];
        });
    });
    Object.keys(fbuffs).forEach(buffTar => {
        Object.keys(fbuffs[buffTar]).forEach(buffAtt => {
            fbuffs[buffTar][buffAtt] = 0;
        });
    });
}

let skewedBuffs = ["AtkHPDef", "Atk", "HP", "Def", "CritDmg", "Shield"];
function updateFormation(){

    // -- Update the Level of the Heroes in 'fhero'.
    Object.keys(fhero).forEach(id => {
        fhero[id]["awst"] = 77;
        calcStats(fhero[id]);
    });

    // -- update the auta buff based on the heroes in formation. (in 'fbuffs')
    fheroIDs.forEach(id => {
        if (Object.keys(fbuffs).includes(hero[id]["bufftarget"])) {
            if (skewedBuffs.includes(hero[id]["buffattribute"])) {
                // fbuffs[hero[id]["bufftarget"]][hero[id]["buffattribute"]] += hero[id]["buffamount"] * 0.8;
                fbuffs[hero[id]["bufftarget"]][hero[id]["buffattribute"]] += hero[id]["buffamount"] * 0.2;
            } else {
                // fbuffs[hero[id]["bufftarget"]][hero[id]["buffattribute"]] += hero[id]["buffamount"] * 4;
                fbuffs[hero[id]["bufftarget"]][hero[id]["buffattribute"]] += hero[id]["buffamount"];
            }
        }
    });

    // -- Calc Hero Stats with Buff -- 
    fheroIDs.forEach(id => {
        ["Atk", "HP", "Def", "CritDmg", "Reload"].forEach(Att => {
            let att = Att.toLowerCase();
            let stat_initial = fhero[id][att];
            let stat_buffAll = fbuffs["AllTeam"][Att];
            let stat_buffElem = fbuffs[fhero[id]["elem"]][Att];
            let stat_buffClass = 0;
            if (Object.keys(fbuffs).includes(fhero[id]["class"]) && Object.keys(fbuffs[fhero[id]["class"]]).includes(Att)) {
                stat_buffClass = fbuffs[fhero[id]["class"]][Att];
            }
            // console.log(`Att+ → ${fhero[id].name}[${att}]: ${stat_buffAll} + ${stat_buffElem} + ${stat_buffClass}`);
            let stat_buffSum = 0;
            let stat_buffed = 0;
            if (att == "CritDmg") {
                stat_buffSum = stat_buffAll + stat_buffElem + stat_buffClass;
                stat_buffed = stat_initial + stat_buffSum;
                // console.log(`Att+ → ${fhero[id].name}[${att}]: ${stat_initial} * ${stat_buffSum} → ${stat_buffed}`);
            } else {
                stat_buffSum = stat_buffAll + stat_buffElem + stat_buffClass + 1;
                stat_buffed = stat_initial * stat_buffSum;
                // console.log(`Att+ → ${fhero[id].name}[${att}]: ${stat_initial} * ${stat_buffSum} → ${stat_buffed}`);
            }
            if(!Object.keys(fbuffEach).includes(id)){
                fbuffEach[id] = {};
            }
            if(!Object.keys(fbuffEach[id]).includes(att)){
                fbuffEach[id][att] = stat_buffAll + stat_buffElem + stat_buffClass;
            }
            
            fhero[id][att] = stat_buffed;
            // console.log(`Att+ → ${fhero[id].name}: ${stat_buffed}`);
        });
        let sum = calcSum(fhero[id]);
        console.log(`Hero+ → ${fhero[id].name}: ${sum}`);
    });

    Object.keys(fhero).forEach(id => {
        calcSum(fhero[id]);
        updateHeroRow(id);
    });
}

function updateHeroRow(id){
    // `col-${col}`, `row-${h.id}`
    // fheroIDs.forEach(id => {
    //     col_update.forEach(col =>{
    //         // let heroRow = document.getElementById(`row-${h.id}`);
    //         // let heroAtt = heroRow.querySelector(`.col-${col}`);
    //         let heroAtt = document.getElementById(`row-${id}`).querySelector(`.col-${col}`);

    //         // -- update option
    //         // let heroAttStat = heroAtt.querySelector(`.stat-${col}`);
    //         // let shortStat = shortNumb(fhero[id][col]);
    //         // heroAttStat.innerText = shortStat[0] + shortStat[1];

    //         // -- add option
    //         let heroAttStatBuffed = document.createElement('div');
    //         let shortStat = shortNumb(fhero[id][col]);
    //         heroAttStatBuffed.innerText = shortStat[0] + shortStat[1];
    //         heroAttStatBuffed.style.color = "#20AA50"
    //         heroAtt.appendChild(heroAttStatBuffed);
    //     });
    // });
    // let heroRow = document.querySelectorAll(".col- .row-");
    // document.getElementById("row-${h.id}").querySelector(".col-${col}");
    col_update.forEach(col =>{
        // let heroRow = document.getElementById(`row-${h.id}`);
        // let heroAtt = heroRow.querySelector(`.col-${col}`);
        let heroAtt = document.getElementById(`row-${id}`).querySelector(`.col-${col}`);

        // -- update option
        let heroAttStat = heroAtt.querySelector(`.stat-${col}`);
        let shortStat = shortNumb(fhero[id][col]);
        heroAttStat.innerText = shortStat[0] + shortStat[1];

        // -- add option
        // let heroAttStatBuffed = document.createElement('div');
        // let shortStat = shortNumb(fhero[id][col]);
        // heroAttStatBuffed.innerText = "+" + shortStat[0] + shortStat[1];
        // heroAttStatBuffed.style.color = "#20AA50"
        // heroAtt.appendChild(heroAttStatBuffed);

        // -- add option
        if(Object.keys(fbuffEach).includes(id) && Object.keys(fbuffEach[id]).includes(col)){
            let heroAttBuff = document.createElement('div');
            let buffToDisplay = fbuffEach[id][col]*100;
            heroAttBuff.innerText = "+(" + buffToDisplay+ "%)";
            heroAttBuff.style.color = "#20AA50";
            heroAtt.appendChild(heroAttBuff);
        }
    });
}

// let fhero = {};
// let fheroIDs = [];
// let fbuffs = {};

function resetStats() {
    fheroIDs.forEach(id => {
        fhero[id] = {};
        Object.keys(hero[id]).forEach(att => {
            fhero[id][att] = hero[id][att];
        });
    });
    Object.keys(fbuffs).forEach(buffTar => {
        Object.keys(fbuffs[buffTar]).forEach(buffAtt => {
            fbuffs[buffTar][buffAtt] = 0;
        });
    });
}



// let sumBalance = { "atk": 1, "hp": 0.1, "def": 2 };
// function calcDamage(heroRow) {
//     let dmg = 0;
//     let CritTotal = heroRow.critrate * heroRow.critdmg;
//     let dmg_sec = heroRow.atk * heroRow.reload;
//     let crit_sec = dmg_sec * CritTotal;
//     dmg = dmg_sec + crit_sec;
//     heroRow.dmg = dmg;
//     console.log(`StatDmg+ → ${heroRow.name}: ${dmg}`);
//     return dmg;
// }
// function calcSum(heroRow) {
//     let sum = 0;
//     let dmg = calcDamage(heroRow) * sumBalance.atk;
//     let hp = heroRow.hp * sumBalance.hp;
//     let def = heroRow.def * sumBalance.def;
//     sum = dmg + hp + def;
//     heroRow.sum = sum;
//     console.log(`StatSum+ → ${heroRow.name}: ${sum}`);
//     return sum;
// }

function bLog(x, y) {
    return Math.log(y) / Math.log(x);
}

function shortNumb(n) {
    let numberOfDecimals = 1;
    if(n<1000){return [x, ""];}
    let x = Number.parseFloat(n / (1000 ** Math.floor(bLog(10, n) / 3, 0))).toFixed(numberOfDecimals);
    let y = "";
    let s = Math.floor(bLog(10, n) / 3, 0) - 1;
    let r = Math.floor((s - 4) / 26, 0) + 2;
    let ss = s - (Math.floor((s - 4) / 26, 0) * 26);
    if (s < 4) {
        y = ['k', 'M', 'B', 'T'][s];
    } else if (ss > 3 && ss < 30) {
        y = String.fromCharCode(ss + 93).repeat(r);
    }
    //let myDebug = `xy: •${x+" "+y}•\t| x: ${x}, y: ${y}, s: ${s}, r: ${r}, ss: ${ss}`;
    //return myDebug;
    //return x+" "+y;
    return [x, " "+y];
}


/* ─────────────── Events ─────────────── */

document.addEventListener('click', (ev) => {
    if (ev.target.dataset.heroLocation != null) {
        console.log("Calling: toggleHero() > " + ev.target.dataset.heroLocation);
        toggleHero(ev.target.dataset.heroId);
        updateSumRow();
        saveFormation();
    }
});


/* ─────────────── Calling Functions ─────────────── */


// let formation = [];
if (localStorage.getItem('formation')) {
    fheroIDs = JSON.parse(localStorage.getItem('formation'));
    console.log("Welcome back adventurer.");
} else {
    console.log("Welcome adventurer!");
}

MakeTable("heroTable", col_start, heroTableID);
MakeTable("formationTable", col_start, formationTableID);

MakeRows(heroTableID);
buildSumRow(col_start, formationTableID);
updateSumRow();

// fheroIDs.forEach(h =>{
//     toggleHero(h);
// })

toggleColBy(".heroimg_hide", "heroimg_hide");

console.log(" ─── End ─── ");