#include <iostream>
#include <cmath>
using namespace std;
int main() {
	
	int a,b,c, D,F ;
	double  x;
	

  
cout << "Enter the number a, b, c: ";		cin>>a>>b>>c;
cout<<" a = "<<a<<"  b = "<<b<<endl;

    if((b*b - 4*a*c) >= 0)
  
{
	
	
	
	
	 D = b*b-4*a*c;
	 cout<<"D = "<<D<<endl;
	 F=sqrt(D);
	cout<<"F = "<<F<<endl;
	
	 x = ( (-1*b) + F)/(2 * a);
    cout << "Первый корень равен " << x << endl;
    
   double x = (( -1*b) +(- F ))/ (2 * a);
    cout << "Второй корень равен " << x << endl;
   

}
}
