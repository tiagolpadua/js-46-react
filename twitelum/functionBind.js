function Foo(prop) {
    this.prop = prop;

    this.printProp = function () {
        console.log(this.prop);
    }

    this.printPropBind = () => {
        console.log(this.prop);
    }

    this.printProp = this.printProp.bind(this);
}

var bar = new Foo('oi');
bar.printProp();

var f;

f = bar.printProp;
f();

f = bar.printPropBind;
f();

f = bar.printProp;
f = f.bind(bar);
f();
