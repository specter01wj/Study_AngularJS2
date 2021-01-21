

namespace demo_01_01 {

	// Type Guards and Differentiating Types
	/*let pet = getSmallPet();

	if ("swim" in pet) {
	  pet.swim();
	}

	if (pet.fly) {
	  pet.fly();
	}


	let pet2 = getSmallPet();
	let fishPet = pet2 as Fish;
	let birdPet = pet2 as Bird;

	if (fishPet.swim) {
	  fishPet.swim();
	} else if (birdPet.fly) {
	  birdPet.fly();
	}*/



	// User-Defined Type Guards
	function isFish(pet: Fish | Bird): pet is Fish {
	  return (pet as Fish).swim !== undefined;
	}

	let pet = getSmallPet();

	if (isFish(pet)) {
	  pet.swim();
	} else {
	  pet.fly();
	}


	const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
	const underWater1: Fish[] = zoo.filter(isFish);

	const underWater2: Fish[] = zoo.filter<Fish>(isFish);
	const underWater3: Fish[] = zoo.filter<Fish>(pet => isFish(pet));


	function move(pet: Fish | Bird) {
	  if ("swim" in pet) {
	    return pet.swim();
	  }
	  return pet.fly();
	}


	
	// typeof type guards





	// instanceof type guards




	// Nullable types




	// Type Aliases

	


}


