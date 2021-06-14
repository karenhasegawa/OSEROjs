// Vechicle クラスの定義
    class Vechicle {
      constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
      }
      spec() {
        console.log("この乗り物の名前は" + this.name + "です。車輪の数は" + this.wheels + "個です。");
      }
    }

    // Vechicle クラスを継承した Car クラスを定義
    class Car extends Vechicle {
      constructor(name, maker) {
        // 親クラスのコンストラクタを呼び出す
        super(name, 4);//呼び出す＝実行する
        this.maker = maker;
      }
      spec() {
        // 親クラスのメソッドを呼び出す
        super.spec();
        console.log(this.maker + "で製造されています。");
      }
    }

    // Vechicle クラスを継承した Bike クラスを定義
    class Bike extends Vechicle {
      constructor(name) {
        // 親クラスのコンストラクタを呼び出す
        super(name, 2);
      }
    }

    // Carクラスのインスタンスを作成し、メソッドを実行
    let car = new Car("消防車", "トヨタ");
    car.spec();

    // Bikeクラスのインスタンスを作成し、メソッドを実行
    let bike = new Bike("白バイ");
    bike.spec();