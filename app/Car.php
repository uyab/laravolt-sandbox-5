<?php

namespace App;

class Car
{
    const TIRE_COUNT = 4;

    private string $brand;

    public function getBrand(): string
    {
        return $this->brand;
    }

    public function printInfo(): string
    {
        return "Mobil merk " . $this->brand . " dengan jumlah roda " . self::TIRE_COUNT;
    }
}

class Truck extends Car {
    const TIRE_COUNT = 6;
}

$someTruck = new Truck();
echo $someTruck->printInfo();
