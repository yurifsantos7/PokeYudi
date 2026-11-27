


// ============================================================================
// [1] CONFIGURAÇÕES DE TIPOS E TABELA DE EFETIVIDADE (TYPE CHART)
// ============================================================================
const TYPE_COLORS = {
    Normal: "#A8A77A", Fire: "#EE8130", Water: "#6390F0", Electric: "#F7D02C",
    Grass: "#7AC74C", Ice: "#96D9D6", Fighting: "#C22E28", Poison: "#A33EA1",
    Ground: "#E2BF65", Flying: "#A98FF3", Psychic: "#F95587", Bug: "#A6B91A",
    Rock: "#B6A136", Ghost: "#735797", Dragon: "#6F35FC", Dark: "#705898",
    Steel: "#B7B7CE", Fairy: "#D685AD"
};

const TYPE_CHART = {
    Normal: { Rock: 0.5, Ghost: 0, Steel: 0.5 },
    Fire: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 2, Bug: 2, Rock: 0.5, Dragon: 0.5, Steel: 2 },
    Water: { Fire: 2, Water: 0.5, Grass: 0.5, Ground: 2, Rock: 2, Dragon: 0.5 },
    Electric: { Water: 2, Electric: 0.5, Grass: 0.5, Ground: 0, Flying: 2, Dragon: 0.5 },
    Grass: { Fire: 0.5, Water: 2, Grass: 0.5, Poison: 0.5, Ground: 2, Flying: 0.5, Bug: 0.5, Rock: 2, Dragon: 0.5, Steel: 0.5 },
    Ice: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 0.5, Ground: 2, Flying: 2, Dragon: 2, Steel: 0.5 },
    Fighting: { Normal: 2, Ice: 2, Poison: 0.5, Flying: 0.5, Psychic: 0.5, Bug: 0.5, Rock: 2, Ghost: 0, Dark: 2, Steel: 2, Fairy: 0.5 },
    Poison: { Grass: 2, Poison: 0.5, Ground: 0.5, Rock: 0.5, Ghost: 0.5, Steel: 0, Fairy: 2 },
    Ground: { Fire: 2, Electric: 2, Grass: 0.5, Poison: 2, Flying: 0, Bug: 0.5, Rock: 2, Steel: 2 },
    Flying: { Electric: 0.5, Grass: 2, Fighting: 2, Bug: 2, Rock: 0.5, Steel: 0.5 },
    Psychic: { Fighting: 2, Poison: 2, Psychic: 0.5, Dark: 0, Steel: 0.5 },
    Bug: { Fire: 0.5, Grass: 2, Fighting: 0.5, Poison: 0.5, Flying: 0.5, Psychic: 2, Ghost: 0.5, Dark: 2, Steel: 0.5, Fairy: 0.5 },
    Rock: { Fire: 2, Ice: 2, Fighting: 0.5, Ground: 0.5, Flying: 2, Bug: 2, Steel: 0.5 },
    Ghost: { Normal: 0, Psychic: 2, Ghost: 2, Dark: 0.5 },
    Dragon: { Dragon: 2, Steel: 0.5, Fairy: 0 },
    Dark: { Fighting: 0.5, Psychic: 2, Ghost: 2, Dark: 0.5, Fairy: 0.5 },
    Steel: { Fire: 0.5, Water: 0.5, Electric: 0.5, Ice: 2, Rock: 2, Steel: 0.5, Fairy: 2 },
    Fairy: { Fire: 0.5, Fighting: 2, Poison: 0.5, Dragon: 2, Dark: 2, Steel: 0.5 }
};

// ============================================================================
// [2] LISTA DE ITENS EQUIPÁVEIS (INCLUINDO OS 12 NOVOS ITENS)
// ============================================================================
const ITEMS = [
    { id: "none", name: "Sem Item" },
    { id: "leftovers", name: "Leftovers" },
    { id: "life-orb", name: "Life Orb" },
    { id: "choice-scarf", name: "Choice Scarf" },
    { id: "sitrus-berry", name: "Sitrus Berry" },
    { id: "rocky-helmet", name: "Rocky Helmet" },
    { id: "focus-sash", name: "Focus Sash" },
    { id: "toxic-orb", name: "Toxic Orb" },
    { id: "flame-orb", name: "Flame Orb" },
    { id: "choice-band", name: "Choice Band" },
    { id: "choice-specs", name: "Choice Specs" },
    { id: "assault-vest", name: "Assault Vest" },
    { id: "expert-belt", name: "Expert Belt" },
    { id: "heavy-duty-boots", name: "Heavy-Duty Boots" },
    { id: "muscle-band", name: "Muscle Band" },
    { id: "wise-glasses", name: "Wise Glasses" },
    { id: "black-sludge", name: "Black Sludge" },
    { id: "shell-bell", name: "Shell Bell" },
    { id: "weakness-policy", name: "Weakness Policy" },
    { id: "lum-berry", name: "Lum Berry" },
    { id: "safety-goggles", name: "Safety Goggles" }
];

// ============================================================================
// [3] TREINADORES DISPONÍVEIS E POKÉDEX COMPLETA (COM SABLEYE)
// ============================================================================
const TRAINERS = [
    "red", "blue", "leaf", "ethan", "lyra", "silver", "brendan", "may", "wally",
    "lucas", "dawn", "barry", "hilbert", "hilda", "nate", "rosa", "calem", "serena",
    "ash", "cynthia", "steven", "lance", "wallace", "iris", "diantha", "leon",
    "giovanni", "guzma", "n"
];

const POKEDEX = [
    { name: "Sableye", ability: "Prankster", type: ["Dark", "Ghost"], hp: 210, atk: 75, def: 75, spa: 65, spd: 65, spe: 50, sprite: "sableye", moves: [{ n: "Fake Out", p: 40, t: "Normal", c: "phys", a: 100 }, { n: "Knock Off", p: 65, t: "Dark", c: "phys", a: 100 }, { n: "Encore", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Taunt", p: 0, t: "Dark", c: "status", a: 100 }] },
    { name: "Shedinja", ability: "Wonder Guard", type: ["Bug", "Ghost"], hp: 1, atk: 90, def: 45, spa: 30, spd: 30, spe: 40, sprite: "shedinja", moves: [{ n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }, { n: "X-Scissor", p: 80, t: "Bug", c: "phys", a: 100 }, { n: "Shadow Sneak", p: 40, t: "Ghost", c: "phys", a: 100 }, { n: "Phantom Force", p: 90, t: "Ghost", c: "phys", a: 100 }] },
    { name: "Aggron", ability: "Sturdy", type: ["Steel", "Rock"], hp: 250, atk: 110, def: 180, spa: 60, spd: 60, spe: 50, sprite: "aggron", moves: [{ n: "Head Smash", p: 150, t: "Rock", c: "phys", a: 80 }, { n: "Heavy Slam", p: 100, t: "Steel", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Ice Punch", p: 75, t: "Ice", c: "phys", a: 100 }] },
    { name: "Arcanine", ability: "Intimidate", type: ["Fire"], hp: 255, atk: 110, def: 80, spa: 100, spd: 80, spe: 95, sprite: "arcanine", moves: [{ n: "Extreme Speed", p: 80, t: "Normal", c: "phys", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Flare Blitz", p: 120, t: "Fire", c: "phys", a: 100 }, { n: "Wild Charge", p: 90, t: "Electric", c: "phys", a: 100 }] },
    { name: "Armaldo", ability: "Tough Claws", type: ["Rock", "Bug"], hp: 255, atk: 125, def: 100, spa: 70, spd: 80, spe: 45, sprite: "armaldo", moves: [{ n: "Stone Edge", p: 100, t: "Rock", c: "phys", a: 80 }, { n: "X-Scissor", p: 80, t: "Bug", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Aqua Tail", p: 90, t: "Water", c: "phys", a: 90 }] },
    { name: "Blastoise", ability: "Torrent", type: ["Water"], hp: 255, atk: 83, def: 100, spa: 85, spd: 105, spe: 78, sprite: "blastoise", moves: [{ n: "Hydro Cannon", p: 150, t: "Water", c: "spec", a: 90 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }, { n: "Surf", p: 90, t: "Water", c: "spec", a: 100 }, { n: "Flash Cannon", p: 80, t: "Steel", c: "spec", a: 100 }] },
    { name: "Blaziken", ability: "Speed Boost", type: ["Fire", "Fighting"], hp: 235, atk: 120, def: 70, spa: 110, spd: 70, spe: 80, sprite: "blaziken", moves: [{ n: "Blaze Kick", p: 85, t: "Fire", c: "phys", a: 90 }, { n: "Sky Uppercut", p: 85, t: "Fighting", c: "phys", a: 90 }, { n: "Flare Blitz", p: 120, t: "Fire", c: "phys", a: 100 }, { n: "Brave Bird", p: 120, t: "Flying", c: "phys", a: 100 }] },
    { name: "Charizard", ability: "Blaze", type: ["Fire", "Flying"], hp: 245, atk: 84, def: 78, spa: 109, spd: 85, spe: 100, sprite: "charizard", moves: [{ n: "Blast Burn", p: 150, t: "Fire", c: "spec", a: 90 }, { n: "Air Slash", p: 75, t: "Flying", c: "spec", a: 95 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Focus Blast", p: 120, t: "Fighting", c: "spec", a: 70 }] },
    { name: "Dragapult", ability: "Levitate", type: ["Dragon", "Ghost"], hp: 240, atk: 120, def: 75, spa: 100, spd: 75, spe: 142, sprite: "dragapult", moves: [{ n: "Dragon Dart", p: 100, t: "Dragon", c: "phys", a: 100 }, { n: "Phantom Force", p: 90, t: "Ghost", c: "phys", a: 100 }, { n: "U-turn", p: 70, t: "Bug", c: "phys", a: 100 }, { n: "Steel Wing", p: 70, t: "Steel", c: "phys", a: 90 }] },
    { name: "Dragonite", ability: "Multiscale", type: ["Dragon", "Flying"], hp: 255, atk: 134, def: 95, spa: 100, spd: 100, spe: 80, sprite: "dragonite", moves: [{ n: "Outrage", p: 120, t: "Dragon", c: "phys", a: 100 }, { n: "Extreme Speed", p: 80, t: "Normal", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Fire Punch", p: 75, t: "Fire", c: "phys", a: 100 }] },
    { name: "Excadrill", ability: "Mold Breaker", type: ["Ground", "Steel"], hp: 270, atk: 135, def: 60, spa: 50, spd: 65, spe: 88, sprite: "excadrill", moves: [{ n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Iron Head", p: 80, t: "Steel", c: "phys", a: 100 }, { n: "Rock Slide", p: 75, t: "Rock", c: "phys", a: 90 }, { n: "X-Scissor", p: 80, t: "Bug", c: "phys", a: 100 }] },
    { name: "Ferrothorn", ability: "Iron Barbs", type: ["Grass", "Steel"], hp: 245, atk: 94, def: 131, spa: 54, spd: 116, spe: 20, sprite: "ferrothorn", moves: [{ n: "Power Whip", p: 120, t: "Grass", c: "phys", a: 85 }, { n: "Gyro Ball", p: 80, t: "Steel", c: "phys", a: 100 }, { n: "Knock Off", p: 65, t: "Dark", c: "phys", a: 100 }, { n: "Body Press", p: 80, t: "Fighting", c: "phys", a: 100 }] },
    { name: "Garchomp", ability: "Rough Skin", type: ["Dragon", "Ground"], hp: 255, atk: 130, def: 95, spa: 80, spd: 85, spe: 102, sprite: "garchomp", moves: [{ n: "Dragon Rush", p: 100, t: "Dragon", c: "phys", a: 75 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Stone Edge", p: 100, t: "Rock", c: "phys", a: 80 }, { n: "Crunch", p: 80, t: "Dark", c: "phys", a: 100 }] },
    { name: "Gardevoir", ability: "Pressure", type: ["Psychic", "Fairy"], hp: 230, atk: 65, def: 65, spa: 125, spd: 115, spe: 80, sprite: "gardevoir", moves: [{ n: "Psychic", p: 90, t: "Psychic", c: "spec", a: 100 }, { n: "Moonblast", p: 95, t: "Fairy", c: "spec", a: 100 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }, { n: "Mystical Fire", p: 75, t: "Fire", c: "spec", a: 100 }] },
    { name: "Gastrodon", ability: "Storm Drain", type: ["Water", "Ground"], hp: 275, atk: 83, def: 68, spa: 92, spd: 82, spe: 39, sprite: "gastrodon", moves: [{ n: "Earth Power", p: 90, t: "Ground", c: "spec", a: 100 }, { n: "Surf", p: 90, t: "Water", c: "spec", a: 100 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }, { n: "Sludge Bomb", p: 90, t: "Poison", c: "spec", a: 100 }] },
    { name: "Gengar", ability: "Levitate", type: ["Ghost", "Poison"], hp: 205, atk: 65, def: 60, spa: 130, spd: 75, spe: 110, sprite: "gengar", moves: [{ n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }, { n: "Sludge Bomb", p: 90, t: "Poison", c: "spec", a: 100 }, { n: "Focus Blast", p: 120, t: "Fighting", c: "spec", a: 70 }, { n: "Dazzling Gleam", p: 80, t: "Fairy", c: "spec", a: 100 }] },
    { name: "Gliscor", ability: "Poison Heal", type: ["Ground", "Flying"], hp: 255, atk: 95, def: 125, spa: 45, spd: 75, spe: 95, sprite: "gliscor", moves: [{ n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Facade", p: 70, t: "Normal", c: "phys", a: 100 }, { n: "Knock Off", p: 65, t: "Dark", c: "phys", a: 100 }, { n: "Ice Fang", p: 65, t: "Ice", c: "phys", a: 95 }] },
    { name: "Golisopod", ability: "Tough Claws", type: ["Bug", "Water"], hp: 255, atk: 125, def: 140, spa: 60, spd: 90, spe: 40, sprite: "golisopod", moves: [{ n: "First Impression", p: 90, t: "Bug", c: "phys", a: 100 }, { n: "Liquidation", p: 85, t: "Water", c: "phys", a: 100 }, { n: "Sucker Punch", p: 70, t: "Dark", c: "phys", a: 100 }, { n: "Leech Life", p: 80, t: "Bug", c: "phys", a: 100 }] },
    { name: "Greninja", ability: "Torrent", type: ["Water", "Dark"], hp: 230, atk: 95, def: 67, spa: 103, spd: 71, spe: 122, sprite: "greninja", moves: [{ n: "Water Shuriken", p: 40, t: "Water", c: "spec", a: 100 }, { n: "Dark Pulse", p: 80, t: "Dark", c: "spec", a: 100 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }, { n: "Hydro Pump", p: 110, t: "Water", c: "spec", a: 80 }] },
    { name: "Gyarados", ability: "Intimidate", type: ["Water", "Flying"], hp: 260, atk: 125, def: 79, spa: 60, spd: 100, spe: 81, sprite: "gyarados", moves: [{ n: "Waterfall", p: 80, t: "Water", c: "phys", a: 100 }, { n: "Ice Fang", p: 65, t: "Ice", c: "phys", a: 95 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Bounce", p: 85, t: "Flying", c: "phys", a: 85 }] },
    { name: "Hydreigon", ability: "Levitate", type: ["Dark", "Dragon"], hp: 255, atk: 105, def: 90, spa: 125, spd: 90, spe: 98, sprite: "hydreigon", moves: [{ n: "Draco Meteor", p: 130, t: "Dragon", c: "spec", a: 90 }, { n: "Dark Pulse", p: 80, t: "Dark", c: "spec", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Flash Cannon", p: 80, t: "Steel", c: "spec", a: 100 }] },
    { name: "Infernape", ability: "Blaze", type: ["Fire", "Fighting"], hp: 235, atk: 104, def: 71, spa: 104, spd: 71, spe: 108, sprite: "infernape", moves: [{ n: "Flare Blitz", p: 120, t: "Fire", c: "phys", a: 100 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Thunder Punch", p: 75, t: "Electric", c: "phys", a: 100 }, { n: "Mach Punch", p: 40, t: "Fighting", c: "phys", a: 100 }] },
    { name: "Lapras", ability: "Water Absorb", type: ["Water", "Ice"], hp: 295, atk: 85, def: 80, spa: 85, spd: 95, spe: 60, sprite: "lapras", moves: [{ n: "Surf", p: 90, t: "Water", c: "spec", a: 100 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }, { n: "Thunderbolt", p: 90, t: "Electric", c: "spec", a: 100 }, { n: "Hydro Pump", p: 110, t: "Water", c: "spec", a: 80 }] },
    { name: "Lucario", ability: "Tough Claws", type: ["Fighting", "Steel"], hp: 220, atk: 110, def: 70, spa: 115, spd: 70, spe: 90, sprite: "lucario", moves: [{ n: "Aura Sphere", p: 80, t: "Fighting", c: "spec", a: 100 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Extreme Speed", p: 80, t: "Normal", c: "phys", a: 100 }, { n: "Meteor Mash", p: 90, t: "Steel", c: "phys", a: 90 }] },
    { name: "Machamp", ability: "Tough Claws", type: ["Fighting"], hp: 260, atk: 130, def: 80, spa: 65, spd: 85, spe: 55, sprite: "machamp", moves: [{ n: "Dynamic Punch", p: 100, t: "Fighting", c: "phys", a: 50 }, { n: "Stone Edge", p: 100, t: "Rock", c: "phys", a: 80 }, { n: "Bullet Punch", p: 40, t: "Steel", c: "phys", a: 100 }, { n: "Ice Punch", p: 75, t: "Ice", c: "phys", a: 100 }] },
    { name: "Metagross", ability: "Tough Claws", type: ["Steel", "Psychic"], hp: 250, atk: 135, def: 130, spa: 95, spd: 90, spe: 70, sprite: "metagross", moves: [{ n: "Meteor Mash", p: 90, t: "Steel", c: "phys", a: 90 }, { n: "Zen Headbutt", p: 80, t: "Psychic", c: "phys", a: 90 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Bullet Punch", p: 40, t: "Steel", c: "phys", a: 100 }] },
    { name: "Mewtwo", ability: "Pressure", type: ["Psychic"], hp: 265, atk: 110, def: 90, spa: 154, spd: 90, spe: 130, sprite: "mewtwo", moves: [{ n: "Psystrike", p: 100, t: "Psychic", c: "spec", a: 100 }, { n: "Aura Sphere", p: 80, t: "Fighting", c: "spec", a: 100 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }] },
    { name: "Milotic", ability: "Pressure", type: ["Water"], hp: 260, atk: 60, def: 79, spa: 100, spd: 125, spe: 81, sprite: "milotic", moves: [{ n: "Surf", p: 90, t: "Water", c: "spec", a: 100 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }, { n: "Hydro Pump", p: 110, t: "Water", c: "spec", a: 80 }, { n: "Dragon Pulse", p: 85, t: "Dragon", c: "spec", a: 100 }] },
    { name: "Mimikyu", ability: "Disguise", type: ["Ghost", "Fairy"], hp: 210, atk: 90, def: 80, spa: 50, spd: 105, spe: 96, sprite: "mimikyu", moves: [{ n: "Play Rough", p: 90, t: "Fairy", c: "phys", a: 90 }, { n: "Shadow Claw", p: 70, t: "Ghost", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Wood Hammer", p: 120, t: "Grass", c: "phys", a: 100 }] },
    { name: "Nidoking", ability: "Sheer Force", type: ["Poison", "Ground"], hp: 251, atk: 102, def: 77, spa: 85, spd: 75, spe: 85, sprite: "nidoking", moves: [{ n: "Earth Power", p: 90, t: "Ground", c: "spec", a: 100 }, { n: "Sludge Wave", p: 95, t: "Poison", c: "spec", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }] },
    { name: "Pikachu", ability: "Pressure", type: ["Electric"], hp: 185, atk: 55, def: 40, spa: 50, spd: 50, spe: 110, sprite: "pikachu", moves: [{ n: "Volt Tackle", p: 120, t: "Electric", c: "phys", a: 100 }, { n: "Thunderbolt", p: 90, t: "Electric", c: "spec", a: 100 }, { n: "Iron Tail", p: 100, t: "Steel", c: "phys", a: 75 }, { n: "Quick Attack", p: 40, t: "Normal", c: "phys", a: 100 }] },
    { name: "Reshiram", ability: "Pressure", type: ["Dragon", "Fire"], hp: 270, atk: 120, def: 100, spa: 150, spd: 120, spe: 90, sprite: "reshiram", moves: [{ n: "Blue Flare", p: 130, t: "Fire", c: "spec", a: 85 }, { n: "Draco Meteor", p: 130, t: "Dragon", c: "spec", a: 90 }, { n: "Earth Power", p: 90, t: "Ground", c: "spec", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }] },
    { name: "Roserade", ability: "Pressure", type: ["Grass", "Poison"], hp: 220, atk: 70, def: 65, spa: 125, spd: 105, spe: 90, sprite: "roserade", moves: [{ n: "Leaf Storm", p: 130, t: "Grass", c: "spec", a: 90 }, { n: "Sludge Bomb", p: 90, t: "Poison", c: "spec", a: 100 }, { n: "Giga Drain", p: 75, t: "Grass", c: "spec", a: 100 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }] },
    { name: "Salamence", ability: "Moxie", type: ["Dragon", "Flying"], hp: 250, atk: 135, def: 80, spa: 110, spd: 80, spe: 100, sprite: "salamence", moves: [{ n: "Dragon Claw", p: 80, t: "Dragon", c: "phys", a: 100 }, { n: "Hydro Pump", p: 110, t: "Water", c: "spec", a: 80 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }] },
    { name: "Sceptile", ability: "Overgrow", type: ["Grass"], hp: 220, atk: 85, def: 65, spa: 105, spd: 85, spe: 120, sprite: "sceptile", moves: [{ n: "Leaf Blade", p: 90, t: "Grass", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Focus Blast", p: 120, t: "Fighting", c: "spec", a: 70 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }] },
    { name: "Scizor", ability: "Technician", type: ["Bug", "Steel"], hp: 240, atk: 130, def: 100, spa: 55, spd: 80, spe: 65, sprite: "scizor", moves: [{ n: "Bullet Punch", p: 40, t: "Steel", c: "phys", a: 100 }, { n: "X-Scissor", p: 80, t: "Bug", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Knock Off", p: 65, t: "Dark", c: "phys", a: 100 }] },
    { name: "Serperior", ability: "Overgrow", type: ["Grass"], hp: 230, atk: 75, def: 95, spa: 75, spd: 95, spe: 113, sprite: "serperior", moves: [{ n: "Leaf Storm", p: 130, t: "Grass", c: "spec", a: 90 }, { n: "Dragon Pulse", p: 85, t: "Dragon", c: "spec", a: 100 }, { n: "Giga Drain", p: 75, t: "Grass", c: "spec", a: 100 }, { n: "Hyper Beam", p: 150, t: "Normal", c: "spec", a: 90 }] },
    { name: "Skarmory", ability: "Sturdy", type: ["Steel", "Flying"], hp: 240, atk: 80, def: 140, spa: 40, spd: 70, spe: 70, sprite: "skarmory", moves: [{ n: "Brave Bird", p: 120, t: "Flying", c: "phys", a: 100 }, { n: "Iron Head", p: 80, t: "Steel", c: "phys", a: 100 }, { n: "Body Press", p: 80, t: "Fighting", c: "phys", a: 100 }, { n: "Drill Peck", p: 80, t: "Flying", c: "phys", a: 100 }] },
    { name: "Snorlax", ability: "Thick Fat", type: ["Normal"], hp: 285, atk: 110, def: 65, spa: 65, spd: 110, spe: 30, sprite: "snorlax", moves: [{ n: "Body Slam", p: 85, t: "Normal", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Crunch", p: 80, t: "Dark", c: "phys", a: 100 }, { n: "Heavy Slam", p: 100, t: "Steel", c: "phys", a: 100 }] },
    { name: "Spiritomb", ability: "Pressure", type: ["Ghost", "Dark"], hp: 200, atk: 92, def: 108, spa: 92, spd: 108, spe: 35, sprite: "spiritomb", moves: [{ n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }, { n: "Dark Pulse", p: 80, t: "Dark", c: "spec", a: 100 }, { n: "Psychic", p: 90, t: "Psychic", c: "spec", a: 100 }, { n: "Sucker Punch", p: 70, t: "Dark", c: "phys", a: 100 }] },
    { name: "Swampert", ability: "Torrent", type: ["Water", "Ground"], hp: 260, atk: 110, def: 90, spa: 85, spd: 90, spe: 60, sprite: "swampert", moves: [{ n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Surf", p: 90, t: "Water", c: "spec", a: 100 }, { n: "Waterfall", p: 80, t: "Water", c: "phys", a: 100 }, { n: "Ice Punch", p: 75, t: "Ice", c: "phys", a: 100 }] },
    { name: "Togekiss", ability: "Pressure", type: ["Fairy", "Flying"], hp: 250, atk: 50, def: 95, spa: 120, spd: 115, spe: 80, sprite: "togekiss", moves: [{ n: "Air Slash", p: 75, t: "Flying", c: "spec", a: 95 }, { n: "Dazzling Gleam", p: 80, t: "Fairy", c: "spec", a: 100 }, { n: "Aura Sphere", p: 80, t: "Fighting", c: "spec", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }] },
    { name: "Tyranitar", ability: "Sand Stream", type: ["Rock", "Dark"], hp: 260, atk: 134, def: 110, spa: 95, spd: 100, spe: 61, sprite: "tyranitar", moves: [{ n: "Stone Edge", p: 100, t: "Rock", c: "phys", a: 80 }, { n: "Crunch", p: 80, t: "Dark", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Ice Punch", p: 75, t: "Ice", c: "phys", a: 100 }] },
    { name: "Venusaur", ability: "Overgrow", type: ["Grass", "Poison"], hp: 250, atk: 82, def: 83, spa: 100, spd: 100, spe: 80, sprite: "venusaur", moves: [{ n: "Frenzy Plant", p: 150, t: "Grass", c: "spec", a: 90 }, { n: "Sludge Bomb", p: 90, t: "Poison", c: "spec", a: 100 }, { n: "Giga Drain", p: 75, t: "Grass", c: "spec", a: 100 }, { n: "Earth Power", p: 90, t: "Ground", c: "spec", a: 100 }] },
    { name: "Volcarona", ability: "Pressure", type: ["Bug", "Fire"], hp: 250, atk: 60, def: 65, spa: 135, spd: 105, spe: 100, sprite: "volcarona", moves: [{ n: "Fiery Dance", p: 80, t: "Fire", c: "spec", a: 100 }, { n: "Bug Buzz", p: 90, t: "Bug", c: "spec", a: 100 }, { n: "Giga Drain", p: 75, t: "Grass", c: "spec", a: 100 }, { n: "Hurricane", p: 110, t: "Flying", c: "spec", a: 70 }] },
    { name: "Zekrom", ability: "Pressure", type: ["Dragon", "Electric"], hp: 270, atk: 150, def: 120, spa: 120, spd: 100, spe: 90, sprite: "zekrom", moves: [{ n: "Bolt Strike", p: 130, t: "Electric", c: "phys", a: 85 }, { n: "Outrage", p: 120, t: "Dragon", c: "phys", a: 100 }, { n: "Dragon Claw", p: 80, t: "Dragon", c: "phys", a: 100 }, { n: "Fusion Bolt", p: 100, t: "Electric", c: "phys", a: 100 }] },
    { name: "Zoroark", ability: "Pressure", type: ["Dark"], hp: 220, atk: 105, def: 60, spa: 120, spd: 60, spe: 105, sprite: "zoroark", moves: [{ n: "Night Daze", p: 85, t: "Dark", c: "spec", a: 95 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Focus Blast", p: 120, t: "Fighting", c: "spec", a: 70 }] },
    { name: "Haxorus", ability: "Mold Breaker", type: ["Dragon"], hp: 240, atk: 147, def: 90, spa: 60, spd: 70, spe: 97, sprite: "haxorus", moves: [{ n: "Outrage", p: 120, t: "Dragon", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Dragon Dance", p: 0, t: "Dragon", c: "status", a: 100 }] },
    { name: "Garganacl", ability: "Sturdy", type: ["Rock"], hp: 300, atk: 100, def: 130, spa: 45, spd: 90, spe: 35, sprite: "garganacl", moves: [{ n: "Salt Cure", p: 100, t: "Rock", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Body Press", p: 80, t: "Fighting", c: "phys", a: 100 }, { n: "Iron Defense", p: 0, t: "Steel", c: "status", a: 100 }] },
    { name: "Gholdengo", ability: "Good as Gold", type: ["Steel", "Ghost"], hp: 245, atk: 60, def: 95, spa: 133, spd: 91, spe: 84, sprite: "gholdengo", moves: [{ n: "Make It Rain", p: 120, t: "Steel", c: "spec", a: 100 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }, { n: "Flash Cannon", p: 80, t: "Steel", c: "spec", a: 100 }, { n: "Nasty Plot", p: 0, t: "Dark", c: "status", a: 100 }] },
    { name: "Smeargle", ability: "Own Tempo", type: ["Normal"], hp: 250, atk: 20, def: 35, spa: 20, spd: 45, spe: 75, sprite: "smeargle", moves: [{ n: "Spore", p: 0, t: "Grass", c: "status", a: 100 }, { n: "Protect", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Baton Pass", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Chansey", ability: "Natural Cure", type: ["Normal"], hp: 350, atk: 15, def: 15, spa: 55, spd: 105, spe: 50, sprite: "chansey", moves: [{ n: "Toxic", p: 0, t: "Poison", c: "status", a: 90 }, { n: "Soft-Boiled", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Reflect", p: 0, t: "Psychic", c: "status", a: 100 }, { n: "Seismic Toss", p: 0, t: "Fighting", c: "phys", a: 100 }] },
    { name: "Scolipede", ability: "Speed Boost", type: ["Bug", "Poison"], hp: 230, atk: 100, def: 89, spa: 55, spd: 69, spe: 112, sprite: "scolipede", moves: [{ n: "Megahorn", p: 120, t: "Bug", c: "phys", a: 85 }, { n: "Poison Jab", p: 80, t: "Poison", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Clodsire", ability: "Water Absorb", type: ["Poison", "Ground"], hp: 360, atk: 75, def: 60, spa: 45, spd: 100, spe: 20, sprite: "clodsire", moves: [{ n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Poison Jab", p: 80, t: "Poison", c: "phys", a: 100 }, { n: "Yawn", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Toxic", p: 0, t: "Poison", c: "status", a: 90 }] },
    { name: "Amoonguss", ability: "Regenerator", type: ["Grass", "Poison"], hp: 270, atk: 85, def: 70, spa: 85, spd: 80, spe: 30, sprite: "amoonguss", moves: [{ n: "Spore", p: 0, t: "Grass", c: "status", a: 100 }, { n: "Giga Drain", p: 75, t: "Grass", c: "spec", a: 100 }, { n: "Sludge Bomb", p: 90, t: "Poison", c: "spec", a: 100 }, { n: "Synthesis", p: 0, t: "Grass", c: "status", a: 100 }] },
    { name: "Aegislash", ability: "Stance Change", type: ["Steel", "Ghost"], hp: 230, atk: 50, def: 140, spa: 50, spd: 140, spe: 60, sprite: "aegislash", moves: [{ n: "King's Shield", p: 0, t: "Steel", c: "status", a: 100 }, { n: "Shadow Sneak", p: 40, t: "Ghost", c: "phys", a: 100 }, { n: "Iron Head", p: 80, t: "Steel", c: "phys", a: 100 }, { n: "Sacred Sword", p: 90, t: "Fighting", c: "phys", a: 100 }] },
    { name: "Breloom", ability: "Technician", type: ["Grass", "Fighting"], hp: 230, atk: 130, def: 80, spa: 60, spd: 60, spe: 70, sprite: "breloom", moves: [{ n: "Spore", p: 0, t: "Grass", c: "status", a: 100 }, { n: "Bullet Seed", p: 25, t: "Grass", c: "phys", a: 100 }, { n: "Mach Punch", p: 40, t: "Fighting", c: "phys", a: 100 }, { n: "Rock Tomb", p: 60, t: "Rock", c: "phys", a: 95 }] },
    { name: "Grimmsnarl", ability: "Prankster", type: ["Dark", "Fairy"], hp: 260, atk: 120, def: 65, spa: 95, spd: 75, spe: 60, sprite: "grimmsnarl", moves: [{ n: "Reflect", p: 0, t: "Psychic", c: "status", a: 100 }, { n: "Light Screen", p: 0, t: "Psychic", c: "status", a: 100 }, { n: "Spirit Break", p: 75, t: "Fairy", c: "phys", a: 100 }, { n: "False Surrender", p: 80, t: "Dark", c: "phys", a: 100 }] },
    { name: "Chandelure", ability: "Flash Fire", type: ["Ghost", "Fire"], hp: 230, atk: 55, def: 90, spa: 145, spd: 90, spe: 80, sprite: "chandelure", moves: [{ n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Energy Ball", p: 90, t: "Grass", c: "spec", a: 100 }, { n: "Psychic", p: 90, t: "Psychic", c: "spec", a: 100 }] },
    { name: "Mamoswine", ability: "Thick Fat", type: ["Ice", "Ground"], hp: 280, atk: 130, def: 80, spa: 70, spd: 60, spe: 80, sprite: "mamoswine", moves: [{ n: "Icicle Crash", p: 85, t: "Ice", c: "phys", a: 90 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Ice Shard", p: 40, t: "Ice", c: "phys", a: 100 }, { n: "Rock Slide", p: 75, t: "Rock", c: "phys", a: 90 }] },
    { name: "Sylveon", ability: "Pixilate", type: ["Fairy"], hp: 265, atk: 65, def: 65, spa: 110, spd: 130, spe: 60, sprite: "sylveon", moves: [{ n: "Hyper Voice", p: 90, t: "Normal", c: "spec", a: 100 }, { n: "Moonblast", p: 95, t: "Fairy", c: "spec", a: 100 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }, { n: "Psyshock", p: 80, t: "Psychic", c: "spec", a: 100 }] },
    { name: "Umbreon", ability: "Pressure", type: ["Dark"], hp: 265, atk: 65, def: 110, spa: 60, spd: 130, spe: 65, sprite: "umbreon", moves: [{ n: "Wish", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Toxic", p: 0, t: "Poison", c: "status", a: 90 }, { n: "Protect", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }] },
    { name: "Krookodile", ability: "Moxie", type: ["Ground", "Dark"], hp: 260, atk: 117, def: 80, spa: 65, spd: 70, spe: 92, sprite: "krookodile", moves: [{ n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Crunch", p: 80, t: "Dark", c: "phys", a: 100 }, { n: "Stone Edge", p: 100, t: "Rock", c: "phys", a: 80 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }] },
    { name: "Corviknight", ability: "Mirror Armor", type: ["Flying", "Steel"], hp: 265, atk: 87, def: 105, spa: 53, spd: 85, spe: 67, sprite: "corviknight", moves: [{ n: "Brave Bird", p: 120, t: "Flying", c: "phys", a: 100 }, { n: "Iron Head", p: 80, t: "Steel", c: "phys", a: 100 }, { n: "Roost", p: 0, t: "Flying", c: "status", a: 100 }, { n: "Body Press", p: 80, t: "Fighting", c: "phys", a: 100 }] },
    { name: "Inteleon", ability: "Sniper", type: ["Water"], hp: 240, atk: 85, def: 65, spa: 125, spd: 65, spe: 120, sprite: "inteleon", moves: [{ n: "Snipe Shot", p: 80, t: "Water", c: "spec", a: 100 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }, { n: "Dark Pulse", p: 80, t: "Dark", c: "spec", a: 100 }, { n: "Air Slash", p: 75, t: "Flying", c: "spec", a: 95 }] },
    { name: "Toxtricity", ability: "Punk Rock", type: ["Electric", "Poison"], hp: 250, atk: 98, def: 70, spa: 114, spd: 70, spe: 75, sprite: "toxtricity", moves: [{ n: "Overdrive", p: 80, t: "Electric", c: "spec", a: 100 }, { n: "Sludge Wave", p: 95, t: "Poison", c: "spec", a: 100 }, { n: "Boomburst", p: 140, t: "Normal", c: "spec", a: 100 }, { n: "Volt Switch", p: 70, t: "Electric", c: "spec", a: 100 }] },
    { name: "Landorus-Therian", ability: "Intimidate", type: ["Ground", "Flying"], hp: 259, atk: 145, def: 90, spa: 105, spd: 80, spe: 91, sprite: "landorus-therian", moves: [{ n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Stone Edge", p: 100, t: "Rock", c: "phys", a: 80 }, { n: "U-turn", p: 70, t: "Bug", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Kingambit", ability: "Supreme Overlord", type: ["Dark", "Steel"], hp: 270, atk: 135, def: 120, spa: 60, spd: 85, spe: 50, sprite: "kingambit", moves: [{ n: "Kowtow Cleave", p: 85, t: "Dark", c: "phys", a: 100 }, { n: "Iron Head", p: 80, t: "Steel", c: "phys", a: 100 }, { n: "Sucker Punch", p: 70, t: "Dark", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Great Tusk", ability: "Protosynthesis", type: ["Ground", "Fighting"], hp: 285, atk: 131, def: 131, spa: 53, spd: 53, spe: 87, sprite: "greattusk", moves: [{ n: "Headlong Rush", p: 120, t: "Ground", c: "phys", a: 100 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Ice Spinner", p: 80, t: "Ice", c: "phys", a: 100 }, { n: "Knock Off", p: 65, t: "Dark", c: "phys", a: 100 }] },
    { name: "Flutter Mane", ability: "Protosynthesis", type: ["Ghost", "Fairy"], hp: 225, atk: 55, def: 55, spa: 135, spd: 135, spe: 135, sprite: "fluttermane", moves: [{ n: "Moonblast", p: 95, t: "Fairy", c: "spec", a: 100 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }, { n: "Mystical Fire", p: 75, t: "Fire", c: "spec", a: 100 }, { n: "Thunderbolt", p: 90, t: "Electric", c: "spec", a: 100 }] },
    { name: "Iron Valiant", ability: "Quark Drive", type: ["Fairy", "Fighting"], hp: 244, atk: 130, def: 90, spa: 120, spd: 60, spe: 116, sprite: "ironvaliant", moves: [{ n: "Moonblast", p: 95, t: "Fairy", c: "spec", a: 100 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Knock Off", p: 65, t: "Dark", c: "phys", a: 100 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }] },
    { name: "Toxapex", ability: "Regenerator", type: ["Poison", "Water"], hp: 220, atk: 63, def: 152, spa: 53, spd: 142, spe: 35, sprite: "toxapex", moves: [{ n: "Scald", p: 80, t: "Water", c: "spec", a: 100 }, { n: "Toxic", p: 0, t: "Poison", c: "status", a: 90 }, { n: "Recover", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Sludge Bomb", p: 90, t: "Poison", c: "spec", a: 100 }] },
    { name: "Heatran", ability: "Flash Fire", type: ["Fire", "Steel"], hp: 261, atk: 90, def: 106, spa: 130, spd: 106, spe: 77, sprite: "heatran", moves: [{ n: "Magma Storm", p: 100, t: "Fire", c: "spec", a: 75 }, { n: "Earth Power", p: 90, t: "Ground", c: "spec", a: 100 }, { n: "Flash Cannon", p: 80, t: "Steel", c: "spec", a: 100 }, { n: "Toxic", p: 0, t: "Poison", c: "status", a: 90 }] },
    { name: "Volcanion", ability: "Water Absorb", type: ["Fire", "Water"], hp: 250, atk: 110, def: 120, spa: 130, spd: 90, spe: 70, sprite: "volcanion", moves: [{ n: "Steam Eruption", p: 110, t: "Water", c: "spec", a: 95 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Earth Power", p: 90, t: "Ground", c: "spec", a: 100 }, { n: "Sludge Wave", p: 95, t: "Poison", c: "spec", a: 100 }] },
    { name: "Rotom-Wash", ability: "Levitate", type: ["Electric", "Water"], hp: 220, atk: 65, def: 107, spa: 105, spd: 107, spe: 86, sprite: "rotom-wash", moves: [{ n: "Hydro Pump", p: 110, t: "Water", c: "spec", a: 80 }, { n: "Volt Switch", p: 70, t: "Electric", c: "spec", a: 100 }, { n: "Thunderbolt", p: 90, t: "Electric", c: "spec", a: 100 }, { n: "Will-O-Wisp", p: 0, t: "Fire", c: "status", a: 85 }] },
    { name: "Zapdos", ability: "Pressure", type: ["Electric", "Flying"], hp: 260, atk: 90, def: 85, spa: 125, spd: 90, spe: 100, sprite: "zapdos", moves: [{ n: "Thunderbolt", p: 90, t: "Electric", c: "spec", a: 100 }, { n: "Hurricane", p: 110, t: "Flying", c: "spec", a: 70 }, { n: "Heat Wave", p: 95, t: "Fire", c: "spec", a: 90 }, { n: "Roost", p: 0, t: "Flying", c: "status", a: 100 }] },
    { name: "Clefable", ability: "Magic Guard", type: ["Fairy"], hp: 265, atk: 70, def: 73, spa: 95, spd: 90, spe: 60, sprite: "clefable", moves: [{ n: "Moonblast", p: 95, t: "Fairy", c: "spec", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Soft-Boiled", p: 0, t: "Normal", c: "status", a: 100 }, { n: "Thunderbolt", p: 90, t: "Electric", c: "spec", a: 100 }] },
    { name: "Slowbro", ability: "Regenerator", type: ["Water", "Psychic"], hp: 265, atk: 75, def: 110, spa: 100, spd: 80, spe: 30, sprite: "slowbro", moves: [{ n: "Scald", p: 80, t: "Water", c: "spec", a: 100 }, { n: "Psychic", p: 90, t: "Psychic", c: "spec", a: 100 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }, { n: "Slack Off", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Weavile", ability: "Pressure", type: ["Dark", "Ice"], hp: 240, atk: 120, def: 65, spa: 45, spd: 85, spe: 125, sprite: "weavile", moves: [{ n: "Triple Axel", p: 100, t: "Ice", c: "phys", a: 90 }, { n: "Knock Off", p: 65, t: "Dark", c: "phys", a: 100 }, { n: "Ice Shard", p: 40, t: "Ice", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Baxcalibur", ability: "Thermal Exchange", type: ["Dragon", "Ice"], hp: 285, atk: 145, def: 92, spa: 75, spd: 86, spe: 87, sprite: "baxcalibur", moves: [{ n: "Glaive Rush", p: 120, t: "Dragon", c: "phys", a: 100 }, { n: "Icicle Crash", p: 85, t: "Ice", c: "phys", a: 90 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Dragon Dance", p: 0, t: "Dragon", c: "status", a: 100 }] },
    { name: "Meowscarada", ability: "Protean", type: ["Grass", "Dark"], hp: 246, atk: 110, def: 70, spa: 81, spd: 70, spe: 123, sprite: "meowscarada", moves: [{ n: "Flower Trick", p: 70, t: "Grass", c: "phys", a: 100 }, { n: "Knock Off", p: 65, t: "Dark", c: "phys", a: 100 }, { n: "Play Rough", p: 90, t: "Fairy", c: "phys", a: 90 }, { n: "U-turn", p: 70, t: "Bug", c: "phys", a: 100 }] },
    { name: "Skeledirge", ability: "Unaware", type: ["Fire", "Ghost"], hp: 274, atk: 75, def: 100, spa: 110, spd: 75, spe: 66, sprite: "skeledirge", moves: [{ n: "Torch Song", p: 80, t: "Fire", c: "spec", a: 100 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }, { n: "Earth Power", p: 90, t: "Ground", c: "spec", a: 100 }, { n: "Slack Off", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Quaquaval", ability: "Moxie", type: ["Water", "Fighting"], hp: 255, atk: 120, def: 80, spa: 85, spd: 75, spe: 85, sprite: "quaquaval", moves: [{ n: "Aqua Step", p: 80, t: "Water", c: "phys", a: 100 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Ice Spinner", p: 80, t: "Ice", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Annihilape", ability: "Defiant", type: ["Fighting", "Ghost"], hp: 280, atk: 115, def: 80, spa: 50, spd: 90, spe: 90, sprite: "annihilape", moves: [{ n: "Rage Fist", p: 100, t: "Ghost", c: "phys", a: 100 }, { n: "Drain Punch", p: 75, t: "Fighting", c: "phys", a: 100 }, { n: "Bulk Up", p: 0, t: "Fighting", c: "status", a: 100 }, { n: "Ice Punch", p: 75, t: "Ice", c: "phys", a: 100 }] },
    { name: "Archaludon", ability: "Stamina", type: ["Steel", "Dragon"], hp: 260, atk: 105, def: 130, spa: 125, spd: 65, spe: 85, sprite: "archaludon", moves: [{ n: "Electro Shot", p: 130, t: "Electric", c: "spec", a: 100 }, { n: "Draco Meteor", p: 130, t: "Dragon", c: "spec", a: 90 }, { n: "Flash Cannon", p: 80, t: "Steel", c: "spec", a: 100 }, { n: "Body Press", p: 80, t: "Fighting", c: "phys", a: 100 }] },
    { name: "Raging Bolt", ability: "Protosynthesis", type: ["Electric", "Dragon"], hp: 295, atk: 73, def: 91, spa: 137, spd: 89, spe: 75, sprite: "ragingbolt", moves: [{ n: "Thunderclap", p: 70, t: "Electric", c: "spec", a: 100 }, { n: "Draco Meteor", p: 130, t: "Dragon", c: "spec", a: 90 }, { n: "Thunderbolt", p: 90, t: "Electric", c: "spec", a: 100 }, { n: "Calm Mind", p: 0, t: "Psychic", c: "status", a: 100 }] },
    { name: "Gouging Fire", ability: "Protosynthesis", type: ["Fire", "Dragon"], hp: 275, atk: 115, def: 121, spa: 65, spd: 93, spe: 91, sprite: "gougingfire", moves: [{ n: "Flare Blitz", p: 120, t: "Fire", c: "phys", a: 100 }, { n: "Dragon Claw", p: 80, t: "Dragon", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Dragon Dance", p: 0, t: "Dragon", c: "status", a: 100 }] },
    { name: "Iron Crown", ability: "Quark Drive", type: ["Steel", "Psychic"], hp: 260, atk: 72, def: 100, spa: 122, spd: 108, spe: 98, sprite: "ironcrown", moves: [{ n: "Tachyon Cutter", p: 100, t: "Steel", c: "spec", a: 100 }, { n: "Psychic", p: 90, t: "Psychic", c: "spec", a: 100 }, { n: "Focus Blast", p: 120, t: "Fighting", c: "spec", a: 70 }, { n: "Calm Mind", p: 0, t: "Psychic", c: "status", a: 100 }] },
    { name: "Iron Boulder", ability: "Quark Drive", type: ["Rock", "Psychic"], hp: 260, atk: 120, def: 80, spa: 68, spd: 108, spe: 124, sprite: "ironboulder", moves: [{ n: "Mighty Cleave", p: 95, t: "Rock", c: "phys", a: 100 }, { n: "Zen Headbutt", p: 80, t: "Psychic", c: "phys", a: 90 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Roaring Moon", ability: "Protosynthesis", type: ["Dragon", "Dark"], hp: 275, atk: 139, def: 71, spa: 55, spd: 101, spe: 119, sprite: "roaringmoon", moves: [{ n: "Knock Off", p: 65, t: "Dark", c: "phys", a: 100 }, { n: "Outrage", p: 120, t: "Dragon", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Dragon Dance", p: 0, t: "Dragon", c: "status", a: 100 }] },
    { name: "Iron Moth", ability: "Quark Drive", type: ["Fire", "Poison"], hp: 250, atk: 70, def: 60, spa: 140, spd: 110, spe: 110, sprite: "ironmoth", moves: [{ n: "Fiery Dance", p: 80, t: "Fire", c: "spec", a: 100 }, { n: "Sludge Wave", p: 95, t: "Poison", c: "spec", a: 100 }, { n: "Energy Ball", p: 90, t: "Grass", c: "spec", a: 100 }, { n: "Dazzling Gleam", p: 80, t: "Fairy", c: "spec", a: 100 }] },
    { name: "Iron Hands", ability: "Quark Drive", type: ["Fighting", "Electric"], hp: 324, atk: 140, def: 108, spa: 50, spd: 68, spe: 50, sprite: "ironhands", moves: [{ n: "Drain Punch", p: 75, t: "Fighting", c: "phys", a: 100 }, { n: "Wild Charge", p: 90, t: "Electric", c: "phys", a: 100 }, { n: "Ice Punch", p: 75, t: "Ice", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Chi-Yu", ability: "Beads of Ruin", type: ["Dark", "Fire"], hp: 225, atk: 80, def: 80, spa: 135, spd: 120, spe: 100, sprite: "chiyu", moves: [{ n: "Dark Pulse", p: 80, t: "Dark", c: "spec", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Overheat", p: 130, t: "Fire", c: "spec", a: 90 }, { n: "Nasty Plot", p: 0, t: "Dark", c: "status", a: 100 }] },
    { name: "Chien-Pao", ability: "Sword of Ruin", type: ["Dark", "Ice"], hp: 250, atk: 120, def: 80, spa: 90, spd: 65, spe: 135, sprite: "chienpao", moves: [{ n: "Icicle Crash", p: 85, t: "Ice", c: "phys", a: 90 }, { n: "Crunch", p: 80, t: "Dark", c: "phys", a: 100 }, { n: "Sacred Sword", p: 90, t: "Fighting", c: "phys", a: 100 }, { n: "Ice Shard", p: 40, t: "Ice", c: "phys", a: 100 }] },
    { name: "Ting-Lu", ability: "Vessel of Ruin", type: ["Dark", "Ground"], hp: 325, atk: 110, def: 125, spa: 55, spd: 80, spe: 45, sprite: "tinglu", moves: [{ n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Ruination", p: 90, t: "Dark", c: "spec", a: 90 }, { n: "Heavy Slam", p: 100, t: "Steel", c: "phys", a: 100 }, { n: "Body Press", p: 80, t: "Fighting", c: "phys", a: 100 }] },
    { name: "Palafin", ability: "Zero to Hero", type: ["Water"], hp: 270, atk: 160, def: 97, spa: 106, spd: 87, spe: 100, sprite: "palafin-hero", moves: [{ n: "Jet Punch", p: 60, t: "Water", c: "phys", a: 100 }, { n: "Wave Crash", p: 120, t: "Water", c: "phys", a: 100 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Ice Punch", p: 75, t: "Ice", c: "phys", a: 100 }] },
    { name: "Ursaluna", ability: "Guts", type: ["Ground", "Normal"], hp: 300, atk: 140, def: 105, spa: 45, spd: 80, spe: 50, sprite: "ursaluna", moves: [{ n: "Facade", p: 70, t: "Normal", c: "phys", a: 100 }, { n: "Headlong Rush", p: 120, t: "Ground", c: "phys", a: 100 }, { n: "Fire Punch", p: 75, t: "Fire", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Ursaluna-Bloodmoon", ability: "Mind's Eye", type: ["Ground", "Normal"], hp: 283, atk: 70, def: 120, spa: 135, spd: 65, spe: 52, sprite: "ursaluna-bloodmoon", moves: [{ n: "Blood Moon", p: 140, t: "Normal", c: "spec", a: 100 }, { n: "Earth Power", p: 90, t: "Ground", c: "spec", a: 100 }, { n: "Vacuum Wave", p: 40, t: "Fighting", c: "spec", a: 100 }, { n: "Calm Mind", p: 0, t: "Psychic", c: "status", a: 100 }] },
    { name: "Ogerpon-Wellspring", ability: "Water Absorb", type: ["Grass", "Water"], hp: 250, atk: 120, def: 84, spa: 60, spd: 96, spe: 110, sprite: "ogerpon-wellspring", moves: [{ n: "Ivy Cudgel", p: 100, t: "Water", c: "phys", a: 100 }, { n: "Horn Leech", p: 75, t: "Grass", c: "phys", a: 100 }, { n: "Play Rough", p: 90, t: "Fairy", c: "phys", a: 90 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Dondozo", ability: "Unaware", type: ["Water"], hp: 320, atk: 100, def: 115, spa: 65, spd: 65, spe: 35, sprite: "dondozo", moves: [{ n: "Wave Crash", p: 120, t: "Water", c: "phys", a: 100 }, { n: "Earthquake", p: 100, t: "Ground", c: "phys", a: 100 }, { n: "Body Press", p: 80, t: "Fighting", c: "phys", a: 100 }, { n: "Rest", p: 0, t: "Psychic", c: "status", a: 100 }] },
    { name: "Cinderace", ability: "Libero", type: ["Fire"], hp: 250, atk: 116, def: 75, spa: 65, spd: 75, spe: 119, sprite: "cinderace", moves: [{ n: "Pyro Ball", p: 120, t: "Fire", c: "phys", a: 90 }, { n: "High Jump Kick", p: 130, t: "Fighting", c: "phys", a: 90 }, { n: "U-turn", p: 70, t: "Bug", c: "phys", a: 100 }, { n: "Sucker Punch", p: 70, t: "Dark", c: "phys", a: 100 }] },
    { name: "Rillaboom", ability: "Grassy Surge", type: ["Grass"], hp: 270, atk: 125, def: 90, spa: 60, spd: 70, spe: 85, sprite: "rillaboom", moves: [{ n: "Grassy Glide", p: 55, t: "Grass", c: "phys", a: 100 }, { n: "Wood Hammer", p: 120, t: "Grass", c: "phys", a: 100 }, { n: "Knock Off", p: 65, t: "Dark", c: "phys", a: 100 }, { n: "U-turn", p: 70, t: "Bug", c: "phys", a: 100 }] },
    { name: "Urshifu-Rapid-Strike", ability: "Unseen Fist", type: ["Fighting", "Water"], hp: 270, atk: 130, def: 100, spa: 63, spd: 60, spe: 97, sprite: "urshifu-rapidstrike", moves: [{ n: "Surging Strikes", p: 90, t: "Water", c: "phys", a: 100 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Aqua Jet", p: 40, t: "Water", c: "phys", a: 100 }, { n: "U-turn", p: 70, t: "Bug", c: "phys", a: 100 }] },
    { name: "Tapu Koko", ability: "Electric Surge", type: ["Electric", "Fairy"], hp: 240, atk: 115, def: 85, spa: 95, spd: 75, spe: 130, sprite: "tapukoko", moves: [{ n: "Thunderbolt", p: 90, t: "Electric", c: "spec", a: 100 }, { n: "Dazzling Gleam", p: 80, t: "Fairy", c: "spec", a: 100 }, { n: "Volt Switch", p: 70, t: "Electric", c: "spec", a: 100 }, { n: "Roost", p: 0, t: "Flying", c: "status", a: 100 }] },
    { name: "Tapu Lele", ability: "Psychic Surge", type: ["Psychic", "Fairy"], hp: 240, atk: 85, def: 75, spa: 130, spd: 115, spe: 95, sprite: "tapulele", moves: [{ n: "Psychic", p: 90, t: "Psychic", c: "spec", a: 100 }, { n: "Moonblast", p: 95, t: "Fairy", c: "spec", a: 100 }, { n: "Focus Blast", p: 120, t: "Fighting", c: "spec", a: 70 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }] },
    { name: "Kartana", ability: "Beast Boost", type: ["Grass", "Steel"], hp: 229, atk: 181, def: 131, spa: 59, spd: 31, spe: 109, sprite: "kartana", moves: [{ n: "Leaf Blade", p: 90, t: "Grass", c: "phys", a: 100 }, { n: "Smart Strike", p: 70, t: "Steel", c: "phys", a: 100 }, { n: "Sacred Sword", p: 90, t: "Fighting", c: "phys", a: 100 }, { n: "Swords Dance", p: 0, t: "Normal", c: "status", a: 100 }] },
    { name: "Magnezone", ability: "Magnet Pull", type: ["Electric", "Steel"], hp: 240, atk: 70, def: 115, spa: 130, spd: 90, spe: 60, sprite: "magnezone", moves: [{ n: "Thunderbolt", p: 90, t: "Electric", c: "spec", a: 100 }, { n: "Flash Cannon", p: 80, t: "Steel", c: "spec", a: 100 }, { n: "Volt Switch", p: 70, t: "Electric", c: "spec", a: 100 }, { n: "Body Press", p: 80, t: "Fighting", c: "phys", a: 100 }] },
    { name: "Pelipper", ability: "Drizzle", type: ["Water", "Flying"], hp: 230, atk: 50, def: 100, spa: 95, spd: 70, spe: 65, sprite: "pelipper", moves: [{ n: "Hurricane", p: 110, t: "Flying", c: "spec", a: 70 }, { n: "Surf", p: 90, t: "Water", c: "spec", a: 100 }, { n: "Roost", p: 0, t: "Flying", c: "status", a: 100 }, { n: "U-turn", p: 70, t: "Bug", c: "phys", a: 100 }] },
    { name: "Barraskewda", ability: "Swift Swim", type: ["Water"], hp: 231, atk: 123, def: 60, spa: 60, spd: 50, spe: 136, sprite: "barraskewda", moves: [{ n: "Liquidation", p: 85, t: "Water", c: "phys", a: 100 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Aqua Jet", p: 40, t: "Water", c: "phys", a: 100 }, { n: "Crunch", p: 80, t: "Dark", c: "phys", a: 100 }] },
    { name: "Torkoal", ability: "Drought", type: ["Fire"], hp: 240, atk: 85, def: 140, spa: 85, spd: 70, spe: 20, sprite: "torkoal", moves: [{ n: "Eruption", p: 150, t: "Fire", c: "spec", a: 100 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Earth Power", p: 90, t: "Ground", c: "spec", a: 100 }, { n: "Body Press", p: 80, t: "Fighting", c: "phys", a: 100 }] },
    { name: "Walking Wake", ability: "Protosynthesis", type: ["Water", "Dragon"], hp: 269, atk: 83, def: 91, spa: 125, spd: 83, spe: 109, sprite: "walkingwake", moves: [{ n: "Hydro Steam", p: 80, t: "Water", c: "spec", a: 100 }, { n: "Draco Meteor", p: 130, t: "Dragon", c: "spec", a: 90 }, { n: "Flamethrower", p: 90, t: "Fire", c: "spec", a: 100 }, { n: "Dragon Pulse", p: 85, t: "Dragon", c: "spec", a: 100 }] },
    { name: "Darkrai", ability: "Bad Dreams", type: ["Dark"], hp: 240, atk: 90, def: 90, spa: 135, spd: 90, spe: 125, sprite: "darkrai", moves: [{ n: "Dark Pulse", p: 80, t: "Dark", c: "spec", a: 100 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }, { n: "Sludge Bomb", p: 90, t: "Poison", c: "spec", a: 100 }, { n: "Nasty Plot", p: 0, t: "Dark", c: "status", a: 100 }] },
    { name: "Kyurem", ability: "Pressure", type: ["Dragon", "Ice"], hp: 295, atk: 130, def: 90, spa: 130, spd: 90, spe: 95, sprite: "kyurem", moves: [{ n: "Freeze-Dry", p: 70, t: "Ice", c: "spec", a: 100 }, { n: "Draco Meteor", p: 130, t: "Dragon", c: "spec", a: 90 }, { n: "Earth Power", p: 90, t: "Ground", c: "spec", a: 100 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }] },
    { name: "Zamazenta", ability: "Dauntless Shield", type: ["Fighting"], hp: 262, atk: 120, def: 115, spa: 80, spd: 115, spe: 138, sprite: "zamazenta", moves: [{ n: "Body Press", p: 80, t: "Fighting", c: "phys", a: 100 }, { n: "Close Combat", p: 120, t: "Fighting", c: "phys", a: 100 }, { n: "Crunch", p: 80, t: "Dark", c: "phys", a: 100 }, { n: "Iron Defense", p: 0, t: "Steel", c: "status", a: 100 }] },
    { name: "Deoxys-Speed", ability: "Pressure", type: ["Psychic"], hp: 220, atk: 95, def: 90, spa: 95, spd: 90, spe: 180, sprite: "deoxys-speed", moves: [{ n: "Psycho Boost", p: 140, t: "Psychic", c: "spec", a: 90 }, { n: "Ice Beam", p: 90, t: "Ice", c: "spec", a: 100 }, { n: "Focus Blast", p: 120, t: "Fighting", c: "spec", a: 70 }, { n: "Shadow Ball", p: 80, t: "Ghost", c: "spec", a: 100 }] },
    { name: "Rayquaza", ability: "Air Lock", type: ["Dragon", "Flying"], hp: 275, atk: 150, def: 90, spa: 150, spd: 90, spe: 95, sprite: "rayquaza", moves: [{ n: "Dragon Ascent", p: 120, t: "Flying", c: "phys", a: 100 }, { n: "Extreme Speed", p: 80, t: "Normal", c: "phys", a: 100 }, { n: "Outrage", p: 120, t: "Dragon", c: "phys", a: 100 }, { n: "Dragon Dance", p: 0, t: "Dragon", c: "status", a: 100 }] }
];

POKEDEX.sort((a, b) => a.name.localeCompare(b.name));

// ============================================================================
// [4] MESTRES ADVERSÁRIOS E VARIÁVEIS GLOBAIS DA BATALHA / MODO TORRE
// ============================================================================
const MASTERS = [
    { name: "Red", sprite: "red", team: ["Pikachu", "Charizard", "Blastoise", "Venusaur", "Lapras", "Snorlax"], giveItems: false },
    { name: "Cynthia", sprite: "cynthia", team: ["Spiritomb", "Milotic", "Garchomp", "Togekiss", "Roserade", "Lucario"], giveItems: false },
    { name: "Steven", sprite: "steven", team: ["Metagross", "Aggron", "Skarmory", "Armaldo", "Excadrill", "Salamence"], giveItems: false },
    { name: "Giovanni", sprite: "giovanni", team: ["Nidoking", "Tyranitar", "Garchomp", "Aggron", "Excadrill", "Machamp"], giveItems: false },
    { name: "Guzma", sprite: "guzma", team: ["Golisopod", "Scizor", "Volcarona", "Armaldo", "Shedinja", "Mimikyu"], giveItems: false },
    { name: "N", sprite: "n", team: ["Zoroark", "Zekrom", "Reshiram", "Hydreigon", "Gastrodon", "Ferrothorn"], giveItems: false },
    { name: "Lance", sprite: "lance", team: ["Dragonite", "Gyarados", "Charizard", "Salamence", "Haxorus", "Garchomp"], giveItems: false },
    { name: "Iris", sprite: "iris", team: ["Haxorus", "Hydreigon", "Aggron", "Lapras", "Salamence", "Excadrill"], giveItems: false }
];

let playerTeam = [];
let enemyTeam = [];
let pIdx = 0;
let eIdx = 0;
let forceSwitch = false;
let chosenTrainer = "";
let enemyMaster = null;
let weather = { name: "none", turns: 0 };
let batonPassMods = null;

// Variáveis do Modo Torre
let isTowerMode = false;
let towerFloor = 1;

const SOUND_MOVES = ["Overdrive", "Boomburst", "Hyper Voice", "Torch Song"];

// ============================================================================
// [5] SISTEMA DE IMAGENS DE EMERGÊNCIA (FALLBACK ANTI-BLOQUEIO DE REDE)
// ============================================================================
function getFallbackSVG(label, bgColor = "#3b82f6") {
    const initials = label.substring(0, 2).toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="14" fill="${bgColor}"/><circle cx="40" cy="40" r="32" fill="rgba(255,255,255,0.12)"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="bold" font-size="26">${initials}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// ============================================================================
// [6] TELAS DE SELEÇÃO (TREINADOR, POKÉDEX, OPONENTE E MODO TORRE)
// ============================================================================
function init() {
    const tGrid = document.getElementById("trainer-grid");
    if (!tGrid) return;
    tGrid.innerHTML = "";

    TRAINERS.forEach((t) => {
        const div = document.createElement("div");
        div.className = "option-card";
        const fallback = getFallbackSVG(t, "#2563eb");

        const img = document.createElement("img");
        img.src = `https://play.pokemonshowdown.com/sprites/trainers/${t}.png`;
        img.alt = t;
        img.onerror = () => {
            img.onerror = null;
            img.src = fallback;
        };

        const p = document.createElement("p");
        p.style.textTransform = "capitalize";
        p.style.fontWeight = "700";
        p.style.margin = "4px 0 0 0";
        p.textContent = t;

        div.appendChild(img);
        div.appendChild(p);
        div.onclick = () => {
            chosenTrainer = t;
            selectPokeScreen();
        };
        tGrid.appendChild(div);
    });
}

function selectPokeScreen() {
    const trainerScreen = document.getElementById("trainer-screen");
    const pokeScreen = document.getElementById("poke-screen");
    if (trainerScreen) trainerScreen.classList.remove("active-screen");
    if (pokeScreen) pokeScreen.classList.add("active-screen");
    renderPokedexCards(POKEDEX);
}

function renderPokedexCards(list) {
    const pGrid = document.getElementById("poke-grid");
    if (!pGrid) return;
    pGrid.innerHTML = "";

    list.forEach((p) => {
        const originalIdx = POKEDEX.findIndex((x) => x.name === p.name);
        const savedPoke = playerTeam.find((x) => x.name === p.name);
        const isSelected = Boolean(savedPoke);

        const div = document.createElement("div");
        div.className = `option-card ${isSelected ? "selected" : ""}`;
        div.id = `card-${originalIdx}`;

        const fallback = getFallbackSVG(p.name, TYPE_COLORS[p.type[0]] || "#475569");
        const img = document.createElement("img");
        img.src = `https://play.pokemonshowdown.com/sprites/gen5ani/${p.sprite}.gif`;
        img.alt = p.name;
        img.onerror = () => {
            img.onerror = () => {
                img.onerror = null;
                img.src = fallback;
            };
            img.src = `https://play.pokemonshowdown.com/sprites/gen5/${p.sprite}.png`;
        };

        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = `<div class="poke-name">${p.name}</div><small class="poke-ability">${p.ability}</small>`;

        const typesDiv = document.createElement("div");
        typesDiv.innerHTML = p.type.map((t) => `<span class="type-badge" style="background:${TYPE_COLORS[t] || "#555"}">${t}</span>`).join("");

        const select = document.createElement("select");
        select.id = `item-${originalIdx}`;
        select.className = "item-select";
        select.innerHTML = ITEMS.map((i) => `<option value="${i.id}" ${savedPoke && savedPoke.item === i.id ? "selected" : ""}>${i.name}</option>`).join("");
        select.onclick = (e) => e.stopPropagation();
        select.onchange = () => updateSelectedItem(p.name, select.value);

        div.appendChild(img);
        div.appendChild(infoDiv);
        div.appendChild(typesDiv);
        div.appendChild(select);

        div.onclick = () => togglePoke(p, originalIdx);
        pGrid.appendChild(div);
    });
}

function filterPokedex() {
    const searchInput = /** @type {HTMLInputElement | null} */ (document.getElementById("poke-search"));
    const term = searchInput ? searchInput.value.toLowerCase() : "";
    const filtered = POKEDEX.filter((p) =>
        p.name.toLowerCase().includes(term) ||
        p.ability.toLowerCase().includes(term) ||
        p.type.some((t) => t.toLowerCase().includes(term))
    );
    renderPokedexCards(filtered);
}

function updateSelectedItem(pokeName, itemVal) {
    const found = playerTeam.find((x) => x.name === pokeName);
    if (found) found.item = itemVal;
}

function togglePoke(p, idx) {
    const selectEl = /** @type {HTMLSelectElement | null} */ (document.getElementById(`item-${idx}`));
    const item = selectEl ? selectEl.value : "none";
    const found = playerTeam.findIndex((x) => x.name === p.name);
    const card = document.getElementById(`card-${idx}`);

    if (found > -1) {
        playerTeam.splice(found, 1);
        if (card) card.classList.remove("selected");
    } else if (playerTeam.length < 6) {
        playerTeam.push({
            ...JSON.parse(JSON.stringify(p)),
            maxHp: p.hp,
            item: item,
            sleep: 0,
            protect: false,
            poison: false,
            burn: false,
            reflect: 0,
            drowsy: 0,
            flinch: false,
            firstTurn: true,
            taunt: 0,
            encore: 0,
            lastMove: null,
            shieldActivated: false,
            disguiseIntact: true
        });
        if (card) card.classList.add("selected");
    }

    const builderTitle = document.getElementById("builder-title");
    if (builderTitle) builderTitle.innerText = `MONTE SUA EQUIPE (${playerTeam.length}/6)`;

    const nextBtn = /** @type {HTMLButtonElement | null} */ (document.getElementById("next-btn"));
    if (nextBtn) nextBtn.disabled = playerTeam.length === 0;
}

function showOpponentScreen() {
    const pokeScreen = document.getElementById("poke-screen");
    const oppScreen = document.getElementById("opponent-screen");
    if (pokeScreen) pokeScreen.classList.remove("active-screen");
    if (oppScreen) oppScreen.classList.add("active-screen");

    const oGrid = document.getElementById("opponent-grid");
    if (!oGrid) return;
    oGrid.innerHTML = "";

    // Card Especial do Modo Torre de Batalha
    const towerDiv = document.createElement("div");
    towerDiv.className = "option-card tower-card";
    const towerFallback = getFallbackSVG("BT", "#f59e0b");

    const towerImg = document.createElement("img");
    towerImg.src = "https://play.pokemonshowdown.com/sprites/trainers/palmer.png";
    towerImg.alt = "Torre de Batalha";
    towerImg.onerror = () => {
        towerImg.onerror = null;
        towerImg.src = towerFallback;
    };

    const towerInfo = document.createElement("div");
    towerInfo.innerHTML = `<h3 style="margin:6px 0 4px 0; color:#fbbf24;">TORRE DE BATALHA</h3><small style="color:#fde68a; font-size:11px; line-height:1.4;">Desafio infinito! Enfrente treinadores aleatórios em sequência e cure 50% do HP a cada andar.</small>`;

    towerDiv.appendChild(towerImg);
    towerDiv.appendChild(towerInfo);
    towerDiv.onclick = () => startTowerMode();
    oGrid.appendChild(towerDiv);

    // Cards dos Mestres Tradicionais
    MASTERS.forEach((m) => {
        const div = document.createElement("div");
        div.className = "option-card";
        const previewTeam = m.team.join(" • ");
        const fallback = getFallbackSVG(m.name, "#dc2626");

        const img = document.createElement("img");
        img.src = `https://play.pokemonshowdown.com/sprites/trainers/${m.sprite}.png`;
        img.alt = m.name;
        img.onerror = () => {
            img.onerror = null;
            img.src = fallback;
        };

        const info = document.createElement("div");
        info.innerHTML = `<h3 style="margin:6px 0 4px 0; color:var(--gold);">${m.name}</h3><small style="color:var(--text-muted); font-size:11px; line-height:1.4;">${previewTeam}</small>`;

        div.appendChild(img);
        div.appendChild(info);
        div.onclick = () => {
            isTowerMode = false;
            startBattle(m);
        };
        oGrid.appendChild(div);
    });
}

// ============================================================================
// [7] MODO TORRE, INÍCIO DA BATALHA, CLIMA VISUAL E INDICADORES DE BUFF/NERF
// ============================================================================
function startTowerMode() {
    isTowerMode = true;
    towerFloor = 1;
    generateTowerOpponent();
}

function generateTowerOpponent() {
    const randomTrainer = TRAINERS[Math.floor(Math.random() * TRAINERS.length)];
    const trainerTitle = randomTrainer.charAt(0).toUpperCase() + randomTrainer.slice(1);
    const pool = [...POKEDEX].sort(() => Math.random() - 0.5);
    const teamSize = Math.min(6, 3 + Math.floor((towerFloor - 1) / 2));
    const selectedNames = pool.slice(0, teamSize).map((p) => p.name);

    const towerBoss = {
        name: `${trainerTitle} (Andar ${towerFloor})`,
        sprite: randomTrainer,
        team: selectedNames,
        giveItems: towerFloor >= 3
    };
    startBattle(towerBoss);
}

function updateTowerHUD() {
    const battleScreen = document.getElementById("battle-screen");
    if (!battleScreen) return;
    let hud = document.getElementById("tower-hud-banner");
    if (isTowerMode && enemyMaster) {
        if (!hud) {
            hud = document.createElement("div");
            hud.id = "tower-hud-banner";
            hud.className = "tower-hud";
            battleScreen.prepend(hud);
        }
        hud.innerText = `TORRE DE BATALHA • ANDAR ${towerFloor} • DESAFIANTE: ${enemyMaster.name.toUpperCase()}`;
    } else if (hud) {
        hud.remove();
    }
}

function updateWeatherVisuals() {
    const viewport = document.querySelector(".battle-viewport");
    if (!viewport) return;

    let overlay = document.getElementById("weather-overlay-fx");
    let badge = document.getElementById("weather-hud-badge");

    if (weather.name === "Sandstorm") {
        viewport.classList.add("weather-sandstorm");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.id = "weather-overlay-fx";
            overlay.className = "weather-overlay";
            viewport.appendChild(overlay);
        }
        if (!badge) {
            badge = document.createElement("div");
            badge.id = "weather-hud-badge";
            badge.className = "weather-badge";
            viewport.appendChild(badge);
        }
        badge.innerText = `TEMPESTADE DE AREIA (${weather.turns} TURNOS)`;
    } else {
        viewport.classList.remove("weather-sandstorm");
        if (overlay) overlay.remove();
        if (badge) badge.remove();
    }
}

function getStatBadgesHTML(p) {
    const base = POKEDEX.find((x) => x.name === p.name);
    if (!base) return "";

    const stats = [
        { label: "ATK", cur: p.atk, orig: base.atk },
        { label: "DEF", cur: p.def, orig: base.def },
        { label: "SPA", cur: p.spa, orig: base.spa },
        { label: "SPD", cur: p.spd, orig: base.spd },
        { label: "SPE", cur: p.spe, orig: base.spe }
    ];

    let badges = "";
    stats.forEach((s) => {
        const ratio = s.cur / s.orig;
        if (ratio > 1.05) {
            badges += `<span class="stat-badge stat-buff">${s.label} x${ratio.toFixed(1)}</span>`;
        } else if (ratio < 0.95) {
            badges += `<span class="stat-badge stat-nerf">${s.label} x${ratio.toFixed(2)}</span>`;
        }
    });

    return badges ? `<div class="stat-badges">${badges}</div>` : "";
}

function startBattle(m) {
    enemyMaster = m;
    eIdx = 0;
    forceSwitch = false;
    batonPassMods = null;
    weather = { name: "none", turns: 0 };

    // Garante que pIdx aponta para um Pokémon vivo ao avançar andares na Torre
    const firstAliveIdx = playerTeam.findIndex((pk) => pk.hp > 0);
    if (firstAliveIdx !== -1) pIdx = firstAliveIdx;

    const usableItems = ITEMS.filter((i) => i.id !== "none").map((i) => i.id);
    enemyTeam = m.team.map((name) => {
        const b = POKEDEX.find((p) => p.name === name) || POKEDEX[0];
        const randomItem = m.giveItems ? usableItems[Math.floor(Math.random() * usableItems.length)] : "none";
        return {
            ...JSON.parse(JSON.stringify(b)),
            maxHp: b.hp,
            item: randomItem,
            sleep: 0,
            protect: false,
            poison: false,
            burn: false,
            reflect: 0,
            drowsy: 0,
            flinch: false,
            firstTurn: true,
            taunt: 0,
            encore: 0,
            lastMove: null,
            shieldActivated: false,
            disguiseIntact: true
        };
    });

    const oppScreen = document.getElementById("opponent-screen");
    const battleScreen = document.getElementById("battle-screen");
    const logEl = document.getElementById("log");
    if (oppScreen) oppScreen.classList.remove("active-screen");
    if (battleScreen) battleScreen.classList.add("active-screen");
    if (logEl) logEl.innerHTML = "";

    updateTowerHUD();
    updateField();
    checkEntryAbilities(playerTeam[pIdx], enemyTeam[eIdx]);
    checkEntryAbilities(enemyTeam[eIdx], playerTeam[pIdx]);
    updateField();
    renderMoves();
    writeLog(`A batalha contra ${m.name} começou!`);
}

function checkEntryAbilities(entering, opp) {
    if (!entering || !opp) return;

    if (entering.ability === "Sand Stream") {
        weather = { name: "Sandstorm", turns: 5 };
        writeLog(`${entering.name} invocou uma Tempestade de Areia por 5 turnos com Sand Stream!`);
        updateWeatherVisuals();
    }
    if (entering.ability === "Intimidate" && opp.hp > 0) {
        if (opp.ability === "Mirror Armor") {
            entering.atk *= 0.67;
            writeLog(`O Mirror Armor de ${opp.name} refletiu o Intimidate de ${entering.name}! O Ataque de ${entering.name} caiu!`);
        } else {
            opp.atk *= 0.67;
            writeLog(`${entering.name} usou Intimidate! O Ataque de ${opp.name} caiu!`);
        }
    }
    if (entering.ability === "Dauntless Shield" && !entering.shieldActivated) {
        entering.def *= 1.5;
        entering.shieldActivated = true;
        writeLog(`O Dauntless Shield aumentou a Defesa de ${entering.name}!`);
    }
}

function updateField() {
    const p = playerTeam[pIdx];
    const e = enemyTeam[eIdx];
    if (!p || !e) return;

    const pImg = /** @type {HTMLImageElement | null} */ (document.getElementById("player-poke-img"));
    const eImg = /** @type {HTMLImageElement | null} */ (document.getElementById("enemy-poke-img"));

    const pFallback = getFallbackSVG(p.name, TYPE_COLORS[p.type[0]] || "#3b82f6");
    const eFallback = getFallbackSVG(e.name, TYPE_COLORS[e.type[0]] || "#ef4444");

    if (pImg) {
        pImg.src = `https://play.pokemonshowdown.com/sprites/gen5ani-back/${p.sprite}.gif`;
        pImg.onerror = () => {
            pImg.onerror = () => {
                pImg.onerror = null;
                pImg.src = pFallback;
            };
            pImg.src = `https://play.pokemonshowdown.com/sprites/gen5-back/${p.sprite}.png`;
        };
    }

    if (eImg) {
        eImg.src = `https://play.pokemonshowdown.com/sprites/gen5ani/${e.sprite}.gif`;
        eImg.onerror = () => {
            eImg.onerror = () => {
                eImg.onerror = null;
                eImg.src = eFallback;
            };
            eImg.src = `https://play.pokemonshowdown.com/sprites/gen5/${e.sprite}.png`;
        };
    }

    const pAnchor = document.getElementById("player-ui-anchor");
    const eAnchor = document.getElementById("enemy-ui-anchor");
    if (pAnchor) pAnchor.innerHTML = renderStatus(p, true);
    if (eAnchor) eAnchor.innerHTML = renderStatus(e, false);
    updateWeatherVisuals();
}

function renderStatus(p, isP) {
    const perc = Math.max(0, Math.min(100, (p.hp / p.maxHp) * 100));
    const color = perc < 20 ? "#ef4444" : (perc < 50 ? "#f59e0b" : "#10b981");
    const avatarImg = isP ? chosenTrainer : (enemyMaster ? enemyMaster.sprite : "red");
    const fallbackAvatar = getFallbackSVG(avatarImg, isP ? "#2563eb" : "#dc2626");

    const sleepTag = p.sleep && p.sleep > 0 ? `<span style="color:#a855f7; font-weight:bold;">(SLP)</span>` : "";
    const poisonTag = p.poison ? `<span style="color:#d946ef; font-weight:bold;">(PSN)</span>` : "";
    const burnTag = p.burn ? `<span style="color:#f97316; font-weight:bold;">(BRN)</span>` : "";
    const drowsyTag = p.drowsy > 0 ? `<span style="color:#94a3b8; font-weight:bold;">(SONO)</span>` : "";
    const tauntTag = p.taunt > 0 ? `<span style="color:#f43f5e; font-weight:bold;">(TAUNT)</span>` : "";
    const encoreTag = p.encore > 0 ? `<span style="color:#38bdf8; font-weight:bold;">(ENCORE)</span>` : "";
    const statBadges = getStatBadgesHTML(p);

    return `<div class="status-box ${isP ? "status-player" : "status-enemy"}"><img src="https://play.pokemonshowdown.com/sprites/trainers/${avatarImg}.png" onerror="this.onerror=null; this.src='${fallbackAvatar}';" class="status-avatar"><div style="flex-grow:1;"><div style="display:flex; justify-content:space-between; align-items:center;"><b style="font-size:13px; letter-spacing:0.5px;">${p.name.toUpperCase()} ${sleepTag} ${poisonTag} ${burnTag} ${drowsyTag} ${tauntTag} ${encoreTag}</b><span style="font-size:11px; color:#94a3b8; font-weight:700;">Lv50</span></div><div class="hp-bar-bg"><div class="hp-bar" style="width:${perc}%; background:${color}"></div></div><div style="display:flex; justify-content:space-between; align-items:flex-end;"><span class="speed-tag">SPE: ${Math.floor(p.spe)} <span class="ability-tag">HAB: ${p.ability}</span></span><span style="font-size:11px; font-family:'JetBrains Mono', monospace; font-weight:700;">${Math.ceil(p.hp)}/${p.maxHp}</span></div>${statBadges}</div></div>`;
}

// ============================================================================
// [8] MENU DE GOLPES E TROCA DE POKÉMON
// ============================================================================
function renderMoves() {
    const p = playerTeam[pIdx];
    const ctrl = document.getElementById("move-controls");
    const movePanel = document.getElementById("move-panel");
    const switchPanel = document.getElementById("switch-panel");
    if (!p || !ctrl) return;

    ctrl.innerHTML = "";
    p.moves.forEach((m) => {
        const btn = document.createElement("button");
        btn.className = `btn btn-move ${m.c}`;
        btn.innerHTML = `<span>${m.n}</span><small style="color:${TYPE_COLORS[m.t] || "#fff"}">${m.t} ${m.p > 0 ? "• " + m.p : ""}</small>`;

        if ((p.taunt > 0 || p.item === "assault-vest") && m.c === "status") btn.disabled = true;
        if (p.encore > 0 && p.lastMove && m.n !== p.lastMove) btn.disabled = true;
        if (m.n === "Fake Out" && !p.firstTurn) btn.disabled = true;

        btn.onclick = () => executeTurn(m);
        ctrl.appendChild(btn);
    });

    if (movePanel) movePanel.style.display = "block";
    if (switchPanel) switchPanel.style.display = "none";
}

function toggleSwitchMenu(show) {
    // Impede cancelar o menu se for troca obrigatória por desmaio ou Baton Pass
    if (!show && forceSwitch) {
        writeLog("Você precisa escolher um Pokémon para entrar em campo!");
        return;
    }

    const movePanel = document.getElementById("move-panel");
    const switchPanel = document.getElementById("switch-panel");
    if (movePanel) movePanel.style.display = show ? "none" : "block";
    if (switchPanel) switchPanel.style.display = show ? "block" : "none";

    if (show) {
        const ctrl = document.getElementById("switch-controls");
        if (!ctrl) return;
        ctrl.innerHTML = "";

        playerTeam.forEach((pk, i) => {
            const btn = document.createElement("button");
            btn.className = "btn btn-switch";
            btn.style.marginTop = "0";
            btn.innerHTML = `${pk.name} (${Math.ceil(pk.hp)} HP)`;
            btn.disabled = pk.hp <= 0 || i === pIdx;
            btn.onclick = () => {
                const oldP = playerTeam[pIdx];
                if (oldP.ability === "Regenerator" && oldP.hp > 0) {
                    oldP.hp = Math.min(oldP.maxHp, oldP.hp + (oldP.maxHp / 3));
                    writeLog(`${oldP.name} recuperou parte do seu HP ao sair de campo devido ao Regenerator!`);
                }

                oldP.drowsy = 0;
                oldP.flinch = false;
                oldP.taunt = 0;
                oldP.encore = 0;
                oldP.firstTurn = true;

                pIdx = i;
                playerTeam[pIdx].firstTurn = true;

                if (batonPassMods) {
                    const newP = playerTeam[pIdx];
                    const base = POKEDEX.find((x) => x.name === newP.name);
                    if (base) {
                        newP.atk = base.atk * batonPassMods.atk;
                        newP.def = base.def * batonPassMods.def;
                        newP.spa = base.spa * batonPassMods.spa;
                        writeLog(`${newP.name} assumiu recebendo os status alterados!`);
                    }
                    batonPassMods = null;
                }

                updateField();
                checkEntryAbilities(playerTeam[pIdx], enemyTeam[eIdx]);
                updateField();

                if (forceSwitch) {
                    forceSwitch = false;
                    renderMoves();
                } else {
                    if (switchPanel) switchPanel.style.display = "none";
                    enemyAttack();
                }
            };
            ctrl.appendChild(btn);
        });
    }
}

// ============================================================================
// [9] CONTROLE DE TURNO, PRIORIDADES E EFEITOS DE FIM DE TURNO
// ============================================================================
function getValidAIMoves(e) {
    const valid = e.moves.filter((m) => {
        if ((e.taunt > 0 || e.item === "assault-vest") && m.c === "status") return false;
        if (e.encore > 0 && e.lastMove && m.n !== e.lastMove) return false;
        if (m.n === "Fake Out" && !e.firstTurn) return false;
        return true;
    });
    return valid.length > 0 ? valid : e.moves;
}

async function executeTurn(move) {
    const p = playerTeam[pIdx];
    const e = enemyTeam[eIdx];
    const movePanel = document.getElementById("move-panel");

    p.flinch = false;
    e.flinch = false;

    if (movePanel) movePanel.style.display = "none";

    const validEMoves = getValidAIMoves(e);
    const eMove = validEMoves[Math.floor(Math.random() * validEMoves.length)];

    let pPriority = (move.c === "status" && p.ability === "Prankster") ? 1 : 0;
    let ePriority = (eMove.c === "status" && e.ability === "Prankster") ? 1 : 0;

    const priorityMoves = [
        "Extreme Speed", "Quick Attack", "Shadow Sneak", "Mach Punch",
        "Bullet Punch", "Sucker Punch", "First Impression", "King's Shield",
        "Protect", "Ice Shard", "Jet Punch", "Aqua Jet", "Vacuum Wave", "Thunderclap"
    ];
    if (priorityMoves.includes(move.n)) pPriority = 1;
    if (move.n === "Extreme Speed") pPriority = 2;
    if (move.n === "Fake Out") pPriority = 3;

    if (priorityMoves.includes(eMove.n)) ePriority = 1;
    if (eMove.n === "Extreme Speed") ePriority = 2;
    if (eMove.n === "Fake Out") ePriority = 3;

    const pSpe = p.spe * (p.item === "choice-scarf" ? 1.5 : 1);
    const eSpe = e.spe * (e.item === "choice-scarf" ? 1.5 : 1);

    p.protect = false;
    e.protect = false;

    let pGoesFirst = false;
    if (pPriority > ePriority) pGoesFirst = true;
    else if (pPriority < ePriority) pGoesFirst = false;
    else if (pSpe >= eSpe) pGoesFirst = true;

    if (pGoesFirst) {
        await attack(p, e, move, true);
        if (enemyTeam[eIdx].hp > 0 && !forceSwitch) {
            await attack(enemyTeam[eIdx], playerTeam[pIdx], eMove, false);
        }
    } else {
        await attack(e, p, eMove, false);
        if (playerTeam[pIdx].hp > 0 && !forceSwitch) {
            await attack(playerTeam[pIdx], enemyTeam[eIdx], move, true);
        }
    }

    if (playerTeam[pIdx].hp > 0 && enemyTeam[eIdx].hp > 0 && !forceSwitch) {
        applyEndOfTurnEffects();
        if (playerTeam[pIdx].hp <= 0) handleFaint(true);
        if (enemyTeam[eIdx].hp <= 0 && playerTeam[pIdx].hp > 0) handleFaint(false);
        if (!forceSwitch && playerTeam[pIdx].hp > 0 && enemyTeam[eIdx].hp > 0) {
            renderMoves();
        }
    }
}

function applyEndOfTurnEffects() {
    const p = playerTeam[pIdx];
    const e = enemyTeam[eIdx];

    if (weather.name === "Sandstorm") {
        [p, e].forEach((pk) => {
            if (pk.hp > 0 && !pk.type.includes("Rock") && !pk.type.includes("Ground") && !pk.type.includes("Steel") && pk.ability !== "Magic Guard" && pk.item !== "safety-goggles") {
                pk.hp = Math.max(0, pk.hp - (pk.maxHp / 16));
                writeLog(`${pk.name} sofreu dano da Tempestade de Areia!`);
            }
        });
        weather.turns--;
        if (weather.turns === 0) {
            weather.name = "none";
            writeLog("A tempestade de areia cessou!");
        }
        updateWeatherVisuals();
    }

    [p, e].forEach((pk) => {
        if (pk.hp > 0) {
            if (pk.ability === "Speed Boost") {
                pk.spe = Math.floor(pk.spe * 1.5);
                writeLog(`A Velocidade de ${pk.name} aumentou com Speed Boost!`);
            }

            if (pk.drowsy > 0) {
                pk.drowsy--;
                if (pk.drowsy === 0) {
                    pk.sleep = 3;
                    writeLog(`${pk.name} adormeceu devido ao cansaço!`);
                }
            }

            if (pk.taunt > 0) {
                pk.taunt--;
                if (pk.taunt === 0) writeLog(`O efeito de Taunt em ${pk.name} acabou!`);
            }
            if (pk.encore > 0) {
                pk.encore--;
                if (pk.encore === 0) writeLog(`O Encore de ${pk.name} acabou!`);
            }

            if (pk.item === "lum-berry" && (pk.poison || pk.burn || pk.sleep > 0)) {
                pk.poison = false;
                pk.burn = false;
                pk.sleep = 0;
                pk.item = "none";
                writeLog(`${pk.name} comeu sua Lum Berry e curou seu status!`);
            }

            if (pk.item === "toxic-orb" && !pk.poison && !pk.burn && pk.sleep === 0 && !pk.type.includes("Poison") && !pk.type.includes("Steel")) {
                pk.poison = true;
                writeLog(`${pk.name} foi envenenado pelo Toxic Orb!`);
            }
            if (pk.item === "flame-orb" && !pk.burn && !pk.poison && pk.sleep === 0 && !pk.type.includes("Fire")) {
                pk.burn = true;
                writeLog(`${pk.name} foi queimado pelo Flame Orb!`);
            }

            if (pk.burn && pk.ability !== "Magic Guard") {
                pk.hp = Math.max(0, pk.hp - (pk.maxHp / 16));
                writeLog(`${pk.name} sofreu dano da queimadura!`);
            }

            if (pk.ability === "Poison Heal" && pk.poison) {
                pk.hp = Math.min(pk.maxHp, pk.hp + (pk.maxHp / 8));
                writeLog(`${pk.name} recuperou HP com o Poison Heal!`);
            } else if (pk.poison && pk.ability !== "Magic Guard") {
                pk.hp = Math.max(0, pk.hp - (pk.maxHp / 8));
                writeLog(`${pk.name} sofreu dano do veneno!`);
            }

            if (pk.item === "leftovers" && pk.hp < pk.maxHp) {
                pk.hp = Math.min(pk.maxHp, pk.hp + (pk.maxHp / 16));
                writeLog(`${pk.name} recuperou HP com o Leftovers!`);
            }

            if (pk.item === "black-sludge") {
                if (pk.type.includes("Poison")) {
                    pk.hp = Math.min(pk.maxHp, pk.hp + (pk.maxHp / 16));
                    writeLog(`${pk.name} recuperou HP com Black Sludge!`);
                } else if (pk.ability !== "Magic Guard") {
                    pk.hp = Math.max(0, pk.hp - (pk.maxHp / 8));
                    writeLog(`${pk.name} sofreu dano pelo Black Sludge!`);
                }
            }

            if (pk.item === "sitrus-berry" && pk.hp > 0 && pk.hp <= pk.maxHp * 0.5) {
                pk.hp = Math.min(pk.maxHp, pk.hp + (pk.maxHp * 0.25));
                pk.item = "none";
                writeLog(`${pk.name} comeu sua Sitrus Berry e recuperou HP!`);
            }

            if (pk.reflect > 0) {
                pk.reflect--;
                if (pk.reflect === 0) writeLog(`A barreira de luz de ${pk.name} desapareceu!`);
            }
        }
    });
    updateField();
}

// ============================================================================
// [10] ANIMAÇÕES VISUAIS E MOTOR DE ATAQUE / DANO / GOLPES DE STATUS
// ============================================================================
async function playAttackEffect(isP, move) {
    const statusWithVFX = ["Spore", "Toxic", "Yawn", "Will-O-Wisp", "Taunt", "Encore"];
    if (move.c === "status" && !statusWithVFX.includes(move.n)) return;

    const attacker = document.getElementById(isP ? "player-poke-img" : "enemy-poke-img");
    const defender = document.getElementById(isP ? "enemy-poke-img" : "player-poke-img");
    const viewport = document.querySelector(".battle-viewport");
    const color = TYPE_COLORS[move.t] || "#fff";

    if (attacker) {
        if (move.c === "phys") {
            attacker.classList.add(isP ? "atk-phys-p" : "atk-phys-e");
        } else if (move.c === "spec") {
            attacker.style.filter = `drop-shadow(0 0 12px ${color}) brightness(1.5)`;
        }
    }

    await new Promise((r) => setTimeout(r, 200));

    if (defender && viewport && (move.c !== "status" || statusWithVFX.includes(move.n))) {
        if (!statusWithVFX.includes(move.n)) defender.classList.add("shake", "hit");
        const vfx = document.createElement("div");
        vfx.className = "vfx-element";
        vfx.style.backgroundColor = color;
        vfx.style.boxShadow = `0 0 25px ${color}`;
        vfx.style.width = "65px";
        vfx.style.height = "65px";
        const defRect = defender.getBoundingClientRect();
        const arenaRect = viewport.getBoundingClientRect();
        vfx.style.left = `${defRect.left - arenaRect.left + 45}px`;
        vfx.style.top = `${defRect.top - arenaRect.top + 45}px`;
        vfx.style.animation = "vfx-burst 0.4s forwards";
        viewport.appendChild(vfx);
        setTimeout(() => vfx.remove(), 400);
    }

    await new Promise((r) => setTimeout(r, 300));
    if (attacker) {
        attacker.classList.remove("atk-phys-p", "atk-phys-e");
        attacker.style.filter = "";
    }
    if (defender) {
        defender.classList.remove("shake", "hit");
    }
}

async function attack(atk, def, move, isP) {
    if (atk.sleep > 0) {
        writeLog(`${atk.name} está dormindo profundamente!`);
        atk.sleep--;
        await new Promise((r) => setTimeout(r, 800));
        updateField();
        return;
    }

    if (atk.flinch) {
        writeLog(`${atk.name} hesitou e não conseguiu atacar devido ao golpe anterior!`);
        atk.flinch = false;
        atk.firstTurn = false;
        await new Promise((r) => setTimeout(r, 800));
        updateField();
        return;
    }

    if (atk.ability === "Stance Change") {
        if (move.c !== "status" && atk.def > atk.atk) {
            const tAtk = atk.atk;
            atk.atk = atk.def;
            atk.def = tAtk;
            const tSpa = atk.spa;
            atk.spa = atk.spd;
            atk.spd = tSpa;
            writeLog(`${atk.name} mudou para a Forma de Lâmina!`);
        } else if (move.n === "King's Shield" && atk.atk > atk.def) {
            const tAtk = atk.atk;
            atk.atk = atk.def;
            atk.def = tAtk;
            const tSpa = atk.spa;
            atk.spa = atk.spd;
            atk.spd = tSpa;
            writeLog(`${atk.name} mudou para a Forma de Escudo!`);
        }
    }

    let finalMoveType = move.t;
    let pixilateBonus = 1;
    if (atk.ability === "Pixilate" && finalMoveType === "Normal") {
        finalMoveType = "Fairy";
        pixilateBonus = 1.3;
    }

    writeLog(`${atk.name} usou ${move.n}!`);
    atk.lastMove = move.n;

    if (move.n === "Fake Out") {
        if (!atk.firstTurn) {
            writeLog("Mas falhou! Fake Out só funciona no primeiro turno em campo!");
            atk.firstTurn = false;
            await new Promise((r) => setTimeout(r, 800));
            return;
        }
        def.flinch = true;
    }
    atk.firstTurn = false;

    if (move.a < 100) {
        if (Math.random() * 100 >= move.a) {
            writeLog(`Mas o ataque de ${atk.name} errou!`);
            await new Promise((r) => setTimeout(r, 800));
            updateField();
            return;
        }
    }

    await playAttackEffect(isP, move);
    await new Promise((r) => setTimeout(r, 200));

    if (def.protect && move.c !== "status") {
        writeLog(`${def.name} protegeu-se do ataque!`);
        await new Promise((r) => setTimeout(r, 800));
        return;
    }
    if (def.protect && ["Spore", "Toxic", "Yawn", "Will-O-Wisp", "Taunt", "Encore"].includes(move.n)) {
        writeLog(`${def.name} protegeu-se do efeito!`);
        await new Promise((r) => setTimeout(r, 800));
        return;
    }

    if (move.c === "status") {
        if (move.n === "Taunt") {
            if (def.ability === "Good as Gold") writeLog(`Não afetou ${def.name} devido à habilidade Good as Gold!`);
            else {
                def.taunt = 3;
                writeLog(`${def.name} caiu na provocação (Taunt) e não pode usar golpes de status!`);
            }
        } else if (move.n === "Encore") {
            if (def.ability === "Good as Gold" || !def.lastMove) writeLog("Mas falhou!");
            else {
                def.encore = 3;
                writeLog(`${def.name} foi forçado a repetir ${def.lastMove} com Encore!`);
            }
        } else if (move.n === "Spore") {
            if (def.ability === "Good as Gold") writeLog(`Não afetou ${def.name} devido à habilidade Good as Gold!`);
            else if (def.type.includes("Grass") || def.item === "safety-goggles") writeLog(`Não afetou ${def.name}!`);
            else {
                def.sleep = 3;
                writeLog(`${def.name} adormeceu!`);
            }
        } else if (move.n === "Yawn") {
            if (def.ability === "Good as Gold") writeLog(`Não afetou ${def.name} devido à habilidade Good as Gold!`);
            else if (def.sleep > 0 || def.drowsy > 0) writeLog("Mas falhou!");
            else {
                def.drowsy = 2;
                writeLog(`${def.name} ficou com muito sono!`);
            }
        } else if (move.n === "Toxic") {
            if (def.ability === "Good as Gold") writeLog(`Não afetou ${def.name} devido à habilidade Good as Gold!`);
            else if (def.type.includes("Poison") || def.type.includes("Steel")) writeLog(`Não afetou ${def.name}!`);
            else if (def.poison) writeLog(`${def.name} já está envenenado!`);
            else {
                def.poison = true;
                writeLog(`${def.name} foi gravemente envenenado!`);
            }
        } else if (move.n === "Will-O-Wisp") {
            if (def.ability === "Good as Gold") writeLog(`Não afetou ${def.name} devido à habilidade Good as Gold!`);
            else if (def.type.includes("Fire")) writeLog(`Não afetou ${def.name}!`);
            else if (def.burn) writeLog(`${def.name} já está queimado!`);
            else {
                def.burn = true;
                writeLog(`${def.name} sofreu queimaduras!`);
            }
        } else if (["Soft-Boiled", "Synthesis", "Wish", "Recover", "Slack Off", "Roost"].includes(move.n)) {
            atk.hp = Math.min(atk.maxHp, atk.hp + (atk.maxHp / 2));
            writeLog(`${atk.name} recuperou sua saúde!`);
        } else if (move.n === "Rest") {
            atk.hp = atk.maxHp;
            atk.poison = false;
            atk.burn = false;
            atk.sleep = 2;
            writeLog(`${atk.name} dormiu e recuperou toda sua energia!`);
        } else if (move.n === "Reflect" || move.n === "Light Screen") {
            atk.reflect = 5;
            writeLog(`Um escudo de luz protege a equipe de ${atk.name}!`);
        } else if (move.n === "Protect" || move.n === "King's Shield") {
            atk.protect = true;
            writeLog(`${atk.name} se protegeu contra ataques!`);
        } else if (move.n === "Baton Pass") {
            const alive = isP
                ? playerTeam.filter((x, i) => x.hp > 0 && i !== pIdx)
                : enemyTeam.filter((x, i) => x.hp > 0 && i !== eIdx);

            if (alive.length === 0) {
                writeLog("Mas falhou, pois não há aliados!");
            } else {
                writeLog(`${atk.name} preparou o Baton Pass!`);
                const base = POKEDEX.find((x) => x.name === atk.name);
                if (base) {
                    batonPassMods = {
                        atk: atk.atk / base.atk,
                        def: atk.def / base.def,
                        spa: atk.spa / base.spa
                    };
                }

                if (atk.ability === "Regenerator" && atk.hp > 0) {
                    atk.hp = Math.min(atk.maxHp, atk.hp + (atk.maxHp / 3));
                    writeLog(`${atk.name} recuperou HP ao sair com Regenerator!`);
                }

                if (isP) {
                    atk.drowsy = 0;
                    forceSwitch = true;
                    toggleSwitchMenu(true);
                    return;
                } else {
                    eIdx = enemyTeam.indexOf(alive[Math.floor(Math.random() * alive.length)]);
                    const newActive = enemyTeam[eIdx];
                    const newBase = POKEDEX.find((x) => x.name === newActive.name);
                    if (newBase && batonPassMods) {
                        newActive.atk = newBase.atk * batonPassMods.atk;
                        newActive.def = newBase.def * batonPassMods.def;
                        newActive.spa = newBase.spa * batonPassMods.spa;
                    }
                    newActive.drowsy = 0;
                    newActive.firstTurn = true;
                    writeLog(`O inimigo enviou ${newActive.name} com os status transferidos!`);
                    batonPassMods = null;
                    updateField();
                    checkEntryAbilities(newActive, playerTeam[pIdx]);
                    updateField();
                }
            }
        } else if (["Swords Dance", "Dragon Dance", "Nasty Plot", "Calm Mind", "Bulk Up"].includes(move.n)) {
            if (move.n === "Nasty Plot") atk.spa *= 2;
            else if (move.n === "Calm Mind") {
                atk.spa *= 1.5;
                atk.spd *= 1.5;
            } else if (move.n === "Bulk Up") {
                atk.atk *= 1.5;
                atk.def *= 1.5;
            } else {
                atk.atk *= 2;
            }
            writeLog(`O status ofensivo de ${atk.name} subiu drasticamente!`);
        } else if (move.n === "Iron Defense") {
            atk.def *= 2;
            writeLog(`A Defesa de ${atk.name} subiu drasticamente!`);
        }

        updateField();
        await new Promise((r) => setTimeout(r, 800));
        return;
    }

    let typeMult = 1;
    def.type.forEach((t) => {
        if (TYPE_CHART[finalMoveType] && TYPE_CHART[finalMoveType][t] !== undefined) {
            typeMult *= TYPE_CHART[finalMoveType][t];
        }
    });

    if (move.n === "Freeze-Dry" && def.type.includes("Water")) {
        typeMult *= 4;
    }

    const ignoreAbilities = atk.ability === "Mold Breaker";
    if (ignoreAbilities) writeLog(`${atk.name} ignora as habilidades do alvo com o Mold Breaker!`);

    if (move.n !== "Seismic Toss") {
        if (typeMult > 1) writeLog("É super efetivo!");
        else if (typeMult > 0 && typeMult < 1) writeLog("Não é muito efetivo...");
        else if (typeMult === 0) {
            writeLog(`Não afetou ${def.name}!`);
            updateField();
            return;
        }
    }

    const stab = (atk.type.includes(finalMoveType) || atk.ability === "Protean" || atk.ability === "Libero") ? 1.5 : 1;

    if (move.n !== "Seismic Toss") {
        if (!ignoreAbilities && def.ability === "Wonder Guard" && typeMult <= 1) {
            writeLog(`Não afetou ${def.name} devido à Wonder Guard!`);
            return;
        }
        if (!ignoreAbilities && def.ability === "Levitate" && finalMoveType === "Ground") {
            writeLog(`Não afetou ${def.name}!`);
            return;
        }
        if (!ignoreAbilities && def.ability === "Flash Fire" && finalMoveType === "Fire") {
            writeLog(`${def.name} absorveu o fogo!`);
            return;
        }
        if (!ignoreAbilities && def.ability === "Water Absorb" && finalMoveType === "Water") {
            writeLog(`${def.name} absorveu a água!`);
            return;
        }
        if (!ignoreAbilities && def.ability === "Storm Drain" && finalMoveType === "Water") {
            writeLog("Storm Drain anulou o ataque!");
            return;
        }
    } else if (typeMult === 0) {
        writeLog(`Não afetou ${def.name}!`);
        updateField();
        return;
    }

    let powerMod = 1 * pixilateBonus;
    if (atk.ability === "Technician" && move.p <= 60 && move.n !== "Seismic Toss") powerMod *= 1.5;
    if (atk.ability === "Punk Rock" && SOUND_MOVES.includes(move.n)) powerMod *= 1.3;
    if (atk.ability === "Sword of Ruin" && move.c === "phys") powerMod *= 1.33;
    if (atk.ability === "Beads of Ruin" && move.c === "spec") powerMod *= 1.33;

    let currentPower = move.p;
    if (move.n === "Facade" && (atk.poison || atk.burn || atk.sleep > 0)) {
        currentPower *= 2;
    }
    if (move.n === "Knock Off" && def.item && def.item !== "none") {
        currentPower *= 1.5;
    }

    if (atk.burn && move.c === "phys" && move.n !== "Facade" && atk.ability !== "Guts") {
        powerMod *= 0.5;
    }
    if (atk.ability === "Guts" && (atk.burn || atk.poison || atk.sleep > 0) && move.c === "phys") {
        powerMod *= 1.5;
    }

    let dmg = 0;

    if (move.n === "Seismic Toss") {
        dmg = 50;
        writeLog("Causou dano fixo por nível!");
    } else {
        let targetSpd = def.spd;
        if (weather.name === "Sandstorm" && (def.type.includes("Rock") || def.type.includes("Ground") || def.type.includes("Steel"))) {
            targetSpd *= 1.5;
        }
        if (def.item === "assault-vest") targetSpd *= 1.5;

        let atkStat = move.c === "phys" ? atk.atk : atk.spa;
        if (atk.item === "choice-band" && move.c === "phys") atkStat *= 1.5;
        if (atk.item === "choice-specs" && move.c === "spec") atkStat *= 1.5;
        if (atk.item === "muscle-band" && move.c === "phys") atkStat *= 1.1;
        if (atk.item === "wise-glasses" && move.c === "spec") atkStat *= 1.1;

        dmg = ((currentPower * powerMod) * atkStat) / (move.c === "phys" ? def.def : targetSpd) * 0.5;
        dmg *= typeMult;
        dmg *= stab;

        if (atk.ability === "Tough Claws" && move.c === "phys") dmg *= 1.3;
        if (atk.ability === "Sheer Force") dmg *= 1.3;
        if (atk.ability === "Blaze" && finalMoveType === "Fire" && atk.hp < atk.maxHp * 0.3) dmg *= 1.5;
        if (atk.ability === "Torrent" && finalMoveType === "Water" && atk.hp < atk.maxHp * 0.3) dmg *= 1.5;
        if (atk.ability === "Overgrow" && finalMoveType === "Grass" && atk.hp < atk.maxHp * 0.3) dmg *= 1.5;

        if (atk.item === "life-orb") {
            dmg *= 1.3;
            if (atk.ability !== "Magic Guard") atk.hp = Math.max(0, atk.hp - (atk.maxHp * 0.1));
        }
        if (atk.item === "expert-belt" && typeMult > 1) dmg *= 1.2;
        if (atk.item === "shell-bell" && dmg > 0) {
            atk.hp = Math.min(atk.maxHp, atk.hp + Math.max(1, Math.floor(dmg * 0.125)));
        }

        if (!ignoreAbilities && def.ability === "Thick Fat" && (finalMoveType === "Fire" || finalMoveType === "Ice")) dmg *= 0.5;
        if (!ignoreAbilities && def.ability === "Multiscale" && def.hp === def.maxHp) dmg *= 0.5;

        if (def.reflect > 0 && move.c === "phys") dmg *= 0.5;
        if (def.ability === "Punk Rock" && SOUND_MOVES.includes(move.n)) dmg *= 0.5;

        if (Math.random() < 0.10 || ["Flower Trick", "Surging Strikes"].includes(move.n)) {
            const critMult = atk.ability === "Sniper" ? 2.25 : 1.5;
            dmg *= critMult;
            writeLog("Um golpe crítico!");
        }
    }

    if (!ignoreAbilities && def.ability === "Disguise" && def.disguiseIntact !== false && move.n !== "Seismic Toss") {
        def.disguiseIntact = false;
        dmg = Math.floor(def.maxHp / 8);
        writeLog(`O disfarce de ${def.name} absorveu o golpe e foi desfeito!`);
    }

    const prevHp = def.hp;
    def.hp = Math.max(0, def.hp - dmg);

    if (move.n === "Knock Off" && def.hp > 0 && def.item && def.item !== "none") {
        writeLog(`${atk.name} derrubou o item ${def.item} de ${def.name}!`);
        def.item = "none";
    }

    if (def.item === "weakness-policy" && typeMult > 1 && def.hp > 0) {
        def.atk *= 2;
        def.spa *= 2;
        def.item = "none";
        writeLog(`A Weakness Policy de ${def.name} ativou! Ataque e Sp. Atk dobraram!`);
    }

    const actualDmg = prevHp - def.hp;
    if (["Giga Drain", "Drain Punch", "Horn Leech"].includes(move.n) && actualDmg > 0) {
        const healAmt = Math.floor(actualDmg / 2);
        atk.hp = Math.min(atk.maxHp, atk.hp + healAmt);
    }

    if (def.hp === 0 && prevHp === def.maxHp) {
        if (!ignoreAbilities && def.ability === "Sturdy") {
            def.hp = 1;
            writeLog(`${def.name} aguentou o golpe com Sturdy!`);
        } else if (def.item === "focus-sash") {
            def.hp = 1;
            def.item = "none";
            writeLog(`${def.name} resistiu com 1 HP graças ao Focus Sash!`);
        }
    }

    if (def.item === "rocky-helmet" && move.c === "phys" && atk.ability !== "Magic Guard") {
        atk.hp = Math.max(0, atk.hp - (atk.maxHp * 0.15));
    }
    if ((def.ability === "Rough Skin" || def.ability === "Iron Barbs") && move.c === "phys" && atk.ability !== "Magic Guard") {
        atk.hp = Math.max(0, atk.hp - (atk.maxHp * 0.125));
        writeLog(`${atk.name} sofreu dano de contato!`);
    }
    if (def.hp > 0 && def.ability === "Stamina" && actualDmg > 0) {
        def.def *= 1.5;
        writeLog(`A Defesa de ${def.name} subiu com Stamina!`);
    }

    if (def.hp > 0 && move.n !== "Seismic Toss") {
        const rand = Math.random();

        if (["Sludge Bomb", "Sludge Wave", "Poison Jab"].includes(move.n)) {
            if (rand < 0.3 && !def.poison && !def.burn && def.sleep === 0 && !def.type.includes("Poison") && !def.type.includes("Steel") && def.ability !== "Good as Gold") {
                def.poison = true;
                writeLog(`${def.name} foi envenenado pelas toxinas do golpe!`);
            }
        } else if (["Flamethrower", "Flare Blitz", "Blaze Kick", "Fire Punch", "Blue Flare", "Scald", "Steam Eruption"].includes(move.n)) {
            if (rand < 0.2 && !def.burn && !def.poison && def.sleep === 0 && !def.type.includes("Fire") && def.ability !== "Flash Fire" && def.ability !== "Good as Gold") {
                def.burn = true;
                writeLog(`${def.name} sofreu queimaduras com o calor!`);
            }
        } else if (["Psychic", "Earth Power", "Shadow Ball", "Bug Buzz", "Flash Cannon", "Focus Blast"].includes(move.n)) {
            if (rand < 0.2) {
                if (def.ability === "Mirror Armor") {
                    atk.spd *= 0.8;
                    writeLog(`O Mirror Armor de ${def.name} refletiu o efeito! A Defesa Especial de ${atk.name} diminuiu!`);
                } else {
                    def.spd *= 0.8;
                    writeLog(`A Defesa Especial de ${def.name} diminuiu!`);
                }
            }
        } else if (["Crunch"].includes(move.n)) {
            if (rand < 0.2) {
                if (def.ability === "Mirror Armor") {
                    atk.def *= 0.8;
                    writeLog(`O Mirror Armor de ${def.name} refletiu o efeito! A Defesa física de ${atk.name} diminuiu!`);
                } else {
                    def.def *= 0.8;
                    writeLog(`A Defesa física de ${def.name} diminuiu!`);
                }
            }
        } else if (["Moonblast", "Spirit Break"].includes(move.n)) {
            if (rand < 0.3) {
                if (def.ability === "Mirror Armor") {
                    atk.spa *= 0.8;
                    writeLog(`O Mirror Armor de ${def.name} refletiu o efeito! O Ataque Especial de ${atk.name} diminuiu!`);
                } else {
                    def.spa *= 0.8;
                    writeLog(`O Ataque Especial de ${def.name} diminuiu!`);
                }
            }
        } else if (["Play Rough"].includes(move.n)) {
            if (rand < 0.1) {
                if (def.ability === "Mirror Armor") {
                    atk.atk *= 0.8;
                    writeLog(`O Mirror Armor de ${def.name} refletiu o efeito! O Ataque físico de ${atk.name} diminuiu!`);
                } else {
                    def.atk *= 0.8;
                    writeLog(`O Ataque físico de ${def.name} diminuiu!`);
                }
            }
        } else if (["Thunderbolt", "Volt Tackle", "Wild Charge"].includes(move.n)) {
            if (rand < 0.2) {
                def.spe = Math.floor(def.spe * 0.5);
                writeLog(`${def.name} ficou paralisado pela eletricidade! Sua velocidade caiu!`);
            }
        } else if (["Ice Beam", "Ice Punch", "Ice Fang", "Icicle Crash"].includes(move.n)) {
            if (rand < 0.2) {
                def.spe = Math.floor(def.spe * 0.8);
                writeLog(`A velocidade de ${def.name} caiu devido ao congelamento parcial!`);
            }
        } else if (["Air Slash", "Iron Head", "Rock Slide", "Waterfall", "Zen Headbutt", "Head Smash"].includes(move.n)) {
            if (rand < 0.3) {
                def.flinch = true;
            }
        }
    }

    if (atk.hp > 0) {
        if (["Draco Meteor", "Leaf Storm", "Overheat", "Psycho Boost"].includes(move.n)) {
            atk.spa *= 0.5;
            writeLog(`O Ataque Especial de ${atk.name} despencou pelo esforço!`);
        } else if (["Close Combat", "Headlong Rush", "Dragon Ascent"].includes(move.n)) {
            atk.def *= 0.67;
            atk.spd *= 0.67;
            writeLog(`A Defesa e Sp. Def de ${atk.name} caíram pela exposição!`);
        } else if (["Meteor Mash"].includes(move.n)) {
            if (Math.random() < 0.2) {
                atk.atk *= 1.5;
                writeLog(`O poder do impacto aumentou o Ataque de ${atk.name}!`);
            }
        } else if (["Fiery Dance"].includes(move.n)) {
            if (Math.random() < 0.5) {
                atk.spa *= 1.5;
                writeLog(`A dança mística aumentou o Ataque Especial de ${atk.name}!`);
            }
        } else if (["Torch Song"].includes(move.n)) {
            atk.spa *= 1.5;
            writeLog(`O canto ardente aumentou o Ataque Especial de ${atk.name}!`);
        } else if (["Aqua Step"].includes(move.n)) {
            atk.spe = Math.floor(atk.spe * 1.5);
            writeLog(`A Velocidade de ${atk.name} aumentou com Aqua Step!`);
        }
    }

    updateField();
    await new Promise((r) => setTimeout(r, 800));

    if (def.hp <= 0) {
        if (atk.ability === "Moxie" || atk.ability === "Beast Boost") {
            atk.atk *= 1.5;
            writeLog(`A habilidade ${atk.ability} aumentou o Ataque de ${atk.name}!`);
            updateField();
        }
        handleFaint(!isP);
    }
    if (atk.hp <= 0 && def.hp > 0) handleFaint(isP);
}

// ============================================================================
// [11] ATAQUE DO INIMIGO APÓS TROCA, DESMAIOS (COM VITÓRIA NA TORRE) E LOG
// ============================================================================
async function enemyAttack() {
    const e = enemyTeam[eIdx];
    const validEMoves = getValidAIMoves(e);
    const move = validEMoves[Math.floor(Math.random() * validEMoves.length)];
    await attack(e, playerTeam[pIdx], move, false);

    if (playerTeam[pIdx].hp > 0 && enemyTeam[eIdx].hp > 0 && !forceSwitch) {
        applyEndOfTurnEffects();
        if (playerTeam[pIdx].hp <= 0) handleFaint(true);
        if (enemyTeam[eIdx].hp <= 0 && playerTeam[pIdx].hp > 0) handleFaint(false);
        if (!forceSwitch && playerTeam[pIdx].hp > 0 && enemyTeam[eIdx].hp > 0) {
            renderMoves();
        }
    }
}

function handleFaint(isP) {
    if (isP) {
        writeLog(`${playerTeam[pIdx].name} caiu!`);
        if (playerTeam.every((x) => x.hp <= 0)) {
            if (isTowerMode) {
                alert(`Fim de linha na Torre de Batalha! Você chegou até o Andar ${towerFloor}!`);
            } else {
                alert("Você foi derrotado!");
            }
            location.reload();
            return;
        }
        forceSwitch = true;
        toggleSwitchMenu(true);
    } else {
        writeLog(`O ${enemyTeam[eIdx].name} inimigo caiu!`);
        eIdx++;
        if (eIdx >= enemyTeam.length) {
            if (isTowerMode) {
                alert(`Andar ${towerFloor} concluído! Sua equipe recuperou 50% do HP e avançou para o Andar ${towerFloor + 1}!`);
                playerTeam.forEach((pk) => {
                    const base = POKEDEX.find((x) => x.name === pk.name);
                    if (base) {
                        pk.atk = base.atk;
                        pk.def = base.def;
                        pk.spa = base.spa;
                        pk.spd = base.spd;
                        pk.spe = base.spe;
                    }
                    if (pk.hp > 0) {
                        pk.hp = Math.min(pk.maxHp, pk.hp + Math.floor(pk.maxHp * 0.5));
                    }
                    pk.poison = false;
                    pk.burn = false;
                    pk.sleep = 0;
                    pk.drowsy = 0;
                    pk.taunt = 0;
                    pk.encore = 0;
                    pk.flinch = false;
                    pk.firstTurn = true;
                });
                towerFloor++;
                generateTowerOpponent();
            } else {
                const masterName = enemyMaster ? enemyMaster.name : "Adversário";
                alert(`Você venceu o Mestre ${masterName}!`);
                location.reload();
            }
        } else {
            enemyTeam[eIdx].firstTurn = true;
            updateField();
            checkEntryAbilities(enemyTeam[eIdx], playerTeam[pIdx]);
            updateField();
            renderMoves();
        }
    }
}

function writeLog(m) {
    const log = document.getElementById("log");
    if (log) {
        log.innerHTML = `> ${m}<br>` + log.innerHTML;
    }
}

// Inicia o jogo ao carregar a página
init();

