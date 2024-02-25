extern crate rand;

use rand::Rnd;
use std::io;

fn main() {
    println!("Adivinhe o numero:");

    let numero_secrete = rand::thread_rng().gen_range(1, 101);
    println!("o numero secreto eh: {}", numero_secrete);
    println!("Divinhe o seu palpiete");

    let mut palpite = String::new();
    io::stdin()
        .read_line(&mut palpite)
        .expect("Falha ao ler entrada");
    println!("voce disse: {}", palpite)
}
