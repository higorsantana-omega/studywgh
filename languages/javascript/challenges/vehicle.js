function renderVehiclesList(vehicles) {
  vehicles.forEach((vehicle) => {
    const price = vehicle.getPrice();
    const make = vehicle.getMake();
    const brand = vehicle.getBrand();

    const data = { price, make, brand };

    switch (vehicle.type) {
      case "car":
        data.nbOfDoors = vehicle.getNbOfDoors();
        break;
      case "motorcycle":
        data.seatHeight = vehicle.getSeatHeight();
        break;
    }

    render(data);
  });
}
