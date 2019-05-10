export function getNumberWithOrdinal(n) {
  var s=["th","st","nd","rd"],
  v=n%100;
  return n+(s[(v-20)%10]||s[v]||s[0]);
}

export const modes = ["", "Splat Zones", "Tower Control", "Rainmaker", "Clam Blitz"]

export const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const weapons = ["Sploosh-o-matic", "Neo Sploosh-o-matic", "Sploosh-o-matic 7",
"Splattershot Jr.", "Custom Splattershot Jr.", "Kensa Splattershot Jr.",
"Splash-o-matic", "Neo Splash-o-matic", "Aerospray MG", "Aerospray RG",
"Aerospray PG", "Splattershot", "Tentatek Splattershot", "Kensa Splattershot",
".52 Gal", ".52 Gal Deco", "Kensa .52 Gal", "N-ZAP '85", "N-ZAP '89",
"N-ZAP '83", "Splattershot Pro", "Forge Splattershot Pro", "Kensa Splattershot Pro",
".96 Gal", ".96 Gal Deco", "Jet Squelcher", "Custom Jet Squelcher",
"L-3 Nozzlenose", "L-3 Nozzlenose D", "Kensa L-3 Nozzlenose",
"H-3 Nozzlenose", "H-3 Nozzlenose D", "Cherry H-3 Nozzlenose", "Squeezer",
"Foil Squeezer",
"Luna Blaster", "Luna Blaster Neo", "Kensa Luna Blaster",
"Blaster", "Custom Blaster", "Range Blaster", "Custom Range Blaster",
"Grim Range Blaster", "Rapid Blaster", "Rapid Blaster Deco", "Kensa Rapid Blaster",
"Rapid Blaster Pro", "Rapid Blaster Pro Deco", "Clash Blaster", "Clash Blaster Neo",
"Carbon Roller", "Carbon Roller Deco", "Splat Roller", "Krak-On Splat Roller",
"Kensa Splat Roller", "Dynamo Roller", "Gold Dynamo Roller", "Kensa Dynamo Roller",
"Flingza Roller", "Foil Flingza Roller", "Inkbrush", "Inkbrush Nouveau",
"Permanent Inkbrush", "Octobrush", "Octobrush Nouveau", "Kensa Octobrush", 
"Classic Squiffer", "New Squiffer", "Fresh Squiffer", "Splat Charger",
"Firefin Splat Charger", "Kensa Charger", "Splatterscope", "Firefin Splatterscope",
"Kensa Splatterscope", "E-liter 4K", "Custom E-liter 4K", "E-liter 4K Scope",
"Custom E-liter 4K Scope", "Bamboozler 14 Mk I", "Bamboozler 14 Mk II",
"Bamboozler 14 Mk III", "Goo Tuber", "Custom Goo Tuber", "Slosher", "Slosher Deco", "Soda Slosher", "Tri-Slosher",
"Tri-Slosher Nouveau", "Sloshing Machine", "Sloshing Machine Neo",
"Kensa Sloshing Machine", "Bloblobber", "Bloblobber Deco", "Explosher",
"Custom Explosher", "Mini Splatling", "Zink Mini Splatling", "Kensa Mini Splatling",
"Heavy Splatling", "Heavy Splatling Deco", "Heavy Splatling Remix",
"Hydra Splatling", "Custom Hydra Splatling", "Ballpoint Splatling",
"Ballpoint Splatling Nouveau", "Nautilus 47", "Nautilus 79", 
"Dapple Dualies", "Dapple Dualies Nouveau", "Clear Dapple Dualies",
"Splat Dualies", "Enperry Splat Dualies", "Kensa Splat Dualies", "Glooga Dualies",
"Glooga Dualies Deco", "Kensa Glooga Dualies", "Dualie Squelchers",
"Custom Dualie Squelchers", "Dark Tetra Dualies", "Light Tetra Dualies", 
"Splat Brella", "Sorella Brella", "Tenta Brella", "Tenta Sorella Brella",
"Tenta Camo Brella", "Undercover Brella", "Undercover Sorella Brella", "Kensa Undercover Brella"]

export const memCakes = ['moon.png', 'S2_Gear_Headgear_Fresh_Fish_Head.png', 'S2_Gear_Headgear_Anglerfish_Mask.png', 'nstc.png', 'chimera.png', 'olive.png', 'pulla.png', 'qr.png', 'OctCollectIcon_00.png', 'OctCollectIcon_01.png', 'OctCollectIcon_02.png', 'OctCollectIcon_03.png', 'OctCollectIcon_04.png', 'OctCollectIcon_05.png', 'OctCollectIcon_06.png', 'OctCollectIcon_07.png', 'OctCollectIcon_08.png', 'OctCollectIcon_09.png', 'OctCollectIcon_10.png', 'OctCollectIcon_11.png', 'OctCollectIcon_12.png', 'OctCollectIcon_13.png', 'OctCollectIcon_14.png', 'OctCollectIcon_15.png', 'OctCollectIcon_16.png', 'OctCollectIcon_17.png', 'OctCollectIcon_18.png', 'OctCollectIcon_19.png', 'OctCollectIcon_20.png', 'OctCollectIcon_21.png', 'OctCollectIcon_22.png', 'OctCollectIcon_23.png', 'OctCollectIcon_24.png', 'OctCollectIcon_25.png', 'OctCollectIcon_26.png', 'OctCollectIcon_27.png', 'OctCollectIcon_28.png', 'OctCollectIcon_29.png', 'OctCollectIcon_30.png', 'OctCollectIcon_31.png', 'OctCollectIcon_32.png', 'OctCollectIcon_33.png', 'OctCollectIcon_34.png', 'OctCollectIcon_35.png', 'OctCollectIcon_36.png', 'OctCollectIcon_37.png', 'OctCollectIcon_38.png', 'OctCollectIcon_39.png', 'OctCollectIcon_40.png', 'OctCollectIcon_41.png', 'OctCollectIcon_42.png', 'OctCollectIcon_43.png', 'OctCollectIcon_44.png', 'OctCollectIcon_45.png', 'OctCollectIcon_46.png', 'OctCollectIcon_47.png', 'OctCollectIcon_48.png', 'OctCollectIcon_49.png', 'OctCollectIcon_50.png', 'OctCollectIcon_51.png', 'OctCollectIcon_52.png', 'OctCollectIcon_53.png', 'OctCollectIcon_54.png', 'OctCollectIcon_55.png', 'OctCollectIcon_56.png', 'OctCollectIcon_57.png', 'OctCollectIcon_59.png', 'OctCollectIcon_60.png', 'OctCollectIcon_61.png', 'OctCollectIcon_62.png', 'OctCollectIcon_63.png', 'OctCollectIcon_64.png', 'OctCollectIcon_65.png', 'OctCollectIcon_66.png', 'OctCollectIcon_67.png', 'OctCollectIcon_68.png', 'OctCollectIcon_69.png', 'OctCollectIcon_70.png', 'OctCollectIcon_71.png', 'OctCollectIcon_72.png', 'OctCollectIcon_73.png', 'OctCollectIcon_74.png', 'OctCollectIcon_75.png', 'OctCollectIcon_76.png', 'OctCollectIcon_77.png', 'OctCollectIcon_78.png', 'OctCollectIcon_79.png', 'lanista.png', 'heart.png']

export const shooters = ["Sploosh-o-matic", "Neo Sploosh-o-matic", "Sploosh-o-matic 7",
"Splattershot Jr.", "Custom Splattershot Jr.", "Kensa Splattershot Jr.",
"Splash-o-matic", "Neo Splash-o-matic", "Aerospray MG", "Aerospray RG",
"Aerospray PG", "Splattershot", "Tentatek Splattershot", "Kensa Splattershot",
".52 Gal", ".52 Gal Deco", "Kensa .52 Gal", "N-ZAP '85", "N-ZAP '89",
"N-ZAP '83", "Splattershot Pro", "Forge Splattershot Pro", "Kensa Splattershot Pro",
".96 Gal", ".96 Gal Deco", "Jet Squelcher", "Custom Jet Squelcher"]

export const semiauto = ["L-3 Nozzlenose", "L-3 Nozzlenose D", "Kensa L-3 Nozzlenose",
"H-3 Nozzlenose", "H-3 Nozzlenose D", "Cherry H-3 Nozzlenose", "Squeezer",
"Foil Squeezer"]

export const blasters = ["Luna Blaster", "Luna Blaster Neo", "Kensa Luna Blaster",
"Blaster", "Custom Blaster", "Range Blaster", "Custom Range Blaster",
"Grim Range Blaster", "Rapid Blaster", "Rapid Blaster Deco", "Kensa Rapid Blaster",
"Rapid Blaster Pro", "Rapid Blaster Pro Deco", "Clash Blaster", "Clash Blaster Neo"]

export const rollers = ["Carbon Roller", "Carbon Roller Deco", "Splat Roller", "Krak-On Splat Roller",
"Kensa Splat Roller", "Dynamo Roller", "Gold Dynamo Roller", "Kensa Dynamo Roller",
"Flingza Roller", "Foil Flingza Roller"]

export const brushes = ["Inkbrush", "Inkbrush Nouveau",
"Permanent Inkbrush", "Octobrush", "Octobrush Nouveau", "Kensa Octobrush"]

export const chargers = ["Classic Squiffer", "New Squiffer", "Fresh Squiffer", "Splat Charger",
"Firefin Splat Charger", "Kensa Charger", "Splatterscope", "Firefin Splatterscope",
"Kensa Splatterscope", "E-liter 4K", "Custom E-liter 4K", "E-liter 4K Scope",
"Custom E-liter 4K Scope", "Bamboozler 14 Mk I", "Bamboozler 14 Mk II",
"Bamboozler 14 Mk III", "Goo Tuber", "Custom Goo Tuber"]

export const sloshers = ["Slosher", "Slosher Deco", "Soda Slosher", "Tri-Slosher",
"Tri-Slosher Nouveau", "Sloshing Machine", "Sloshing Machine Neo",
"Kensa Sloshing Machine", "Bloblobber", "Bloblobber Deco", "Explosher",
"Custom Explosher"]

export const splatlings = ["Mini Splatling", "Zink Mini Splatling", "Kensa Mini Splatling",
"Heavy Splatling", "Heavy Splatling Deco", "Heavy Splatling Remix",
"Hydra Splatling", "Custom Hydra Splatling", "Ballpoint Splatling",
"Ballpoint Splatling Nouveau", "Nautilus 47", "Nautilus 79"]

export const dualies = ["Dapple Dualies", "Dapple Dualies Nouveau", "Clear Dapple Dualies",
"Splat Dualies", "Enperry Splat Dualies", "Kensa Splat Dualies", "Glooga Dualies",
"Glooga Dualies Deco", "Kensa Glooga Dualies", "Dualie Squelchers",
"Custom Dualie Squelchers", "Dark Tetra Dualies", "Light Tetra Dualies"]

export const brellas = ["Splat Brella", "Sorella Brella", "Tenta Brella", "Tenta Sorella Brella",
"Tenta Camo Brella", "Undercover Brella", "Undercover Sorella Brella", "Kensa Undercover Brella"]

export const weaponsByCategory = {"Shooters": shooters, "Semi-automatic Shooters": semiauto,
"Blasters": blasters, "Rollers": rollers, "Brushes": brushes, "Chargers": chargers, "Sloshers": sloshers,
"Splatlings": splatlings, "Dualies": dualies, "Brellas": brellas}

export const categoryKeys = ["Shooters", "Semi-automatic Shooters", "Blasters", "Rollers", "Brushes", "Chargers", "Sloshers", "Splatlings", "Dualies", "Brellas"]