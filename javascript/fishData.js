/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
   
    {
        name: "Bart",
        diet: "crustaceans",
        image: "blue.jpg"
        species: "Trigger"
        length: 7,
        waterType: "Salt",
        harvestLocation: "Costa Rica"
        
    },

    {
        name: "doctor fish",
        diet: "biofilm ",
        image: "green.jpg"
        species: "Tinca tinca"
        length: 3.9,
        waterType: "Fresh Water",
        harvestLocation: "Massachusetts "
    },

    {
        name: "Mr Freeze",
        food: "Meal Worms",
		image: "red.jpg",
		species: "Tang",
		length: 3,
		waterType: "Salt",
		harvestLocation: "Florida"
    }, 
    {
        name: "Nemo",
        food: "Goldfish",
        image: "blue.jpg",
        species: "Clown",
        length: 3,
        water: "Salt-water",
        harvestlocation: "Florida"
    },

    {
        name: "Don Julio",
        food: "snails",
        image: "stingray.jpg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"

    },
    {
        image: "fish.jpg",
        name: "Eleanor",
        species: "Angler",
        length: 5,
        harvestLocation: "North Carolina",
        waterType: "Fresh",
        diet: "everything"
    },
    {
        name: "Karen",
        food: "Algae",
        image: "yellow.jpg",
        species: "Siamese algae eater",
        length: 5,
        waterType: "salt", 
        harvestLocation: "Puerto Rico"

    },
    {
        name: "Robin Gilliams",
        food: "Bee Moths",
        image: "orange.jpg",
        species: "Clownfish",
        length: 2,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Three-Eyed Fish",
        food: "worms",
        image: "orange.jpg",
        species: "Fictional",
        length: 5,
        waterType: "Salt-water",
        harvestLocation: "Ohio"

    },
    {
        name: "doctor fish",
        diet: "biofilm ",
        image: "green.jpg"
        species: "Tinca tinca"
        length: 3.9,
        waterType: "Fresh Water",
        harvestLocation: "Massachusetts"
        
    },
    {
        name: "Florida Man",
        food: "Shrimp",
        image: "missing.jpg",
        species: "Blobfish",
        length: 10,
        waterType: "salt",
        harvestLocation: "Florida",
    },
    {
        name: "Bruce",
        food: "not fish",
        image: "bruce.jpg",
        species: "greatWhite",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    },
    {
        name: "Gordon",
        food: "Krill",
        image: "pink.jpg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    },
    {
        name: "Bloat",
        food: "shrimp",
        image: "yellow.jpg",
        species: "Blow Fish",
        length: 5,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Marlin",
        food: "Mealworms",
        image: "orange.jpg",
        species: "clownfish",
        length: 4,
        waterType: "Saltwater",
        harvestLocation: "Bahamas"
    },
    {
        name: "Blob Marley",
        food: "mollusks",
        image: "gray.jpg",
        species: "Blobfish",
        length: 8,
        waterType: "Salt",
        harvestLocation: "Australia"
    }
]

export const getFish = () => {
    return fishCollection
}
