#include <iostream>
#include <cmath>
using namespace std;


int  change(int a, int b, int c ){
	cout<<"Vvedi a, b, c: ";		cin>>a>>b>>c;
if (a > b>c)
    return a,b,c;
if (a>c>b )
    return a,c,b;
    
cout<<" RESULT " <<change(a,b,c)<<endl;

}
int change(int x, int y){
if(x > y)  return x,y;				
if(y > x)  return y,x;			


}



				
int main(){
	int a,b,c;
	int x,y;
	
	cout<<" RESULT " <<change(a,b,c)<<endl;
	cout<<" RESULT " <<change(x,y)<<endl;

}



