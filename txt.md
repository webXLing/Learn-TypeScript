### public  private protected

--- TypeScript 中class中的属性和方法默认是 public  
--- private 只能在它声明的类中访问 子类（衍生类 也无法访问）
--- protected 只能在它声明的类 或者 子类（衍生类）中访问

### readonly修饰符
--- 只读属性必须在声明时或构造函数里被初始化。

### abstract 
--- abstract 类似于interface 是来描述类的
--- 抽象类 可以包含具体的方法
--- 抽象方法 必须在 派生类中实现
--- 不能直接实例抽象类 但是可以对抽象类的衍生类 进行实例