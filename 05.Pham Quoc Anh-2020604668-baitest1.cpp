#include<iostream>
int n,a[100];
void nhapn(){
	printf("nhap n va 3 <= n <= 50: ");
	do{
		scanf("%d",&n);
		if(n<3||n>50)printf("nhap lai n: ");
	}while(n<3||n>50);
}
void nhap(){
	printf("nhap %d phan tu cua mang   ",n);
	for(int i=0;i<n;i++)
		scanf("%d",&a[i]);
}
void xuat(){
	for(int i=0;i<n;i++)
		printf("\t%d",a[i]);
}
int ktr(){
	for(int i=0;i<n;i++)
		if(a[i]<a[i+1])return 0;
	  return 1;
}
void sapxep(){
	for(int i=0;i<n-1;i++){
		for(int j=i+1;j<n;j++){
			if(a[i]<a[j]){
				int tam =a[i];
				a[i]=a[j];
				a[j]=tam;			}
		}
	}
}
void chen(int x,int k){
	for(int i=n;i>=k;i--)
		a[i]=a[i-1];
	n++;
	a[k]=x;
}
int sochannhonhat(){
	int minchan;
	for(int i=0;i<n;i++)
		if(a[i]%2==0)
		{minchan =a[i];
		break;
		}
	for(int i=0;i<n;i++)
	{
		if(a[i]%2==0&&a[i]<minchan)
		minchan=a[i];
	}
	return minchan;
}
void chenchan(){
	int t=sochannhonhat();
	for(int i=0;i<n;i++)
	{
		if(a[i]==t)
		{
			chen(t,i+1);
			break;
		}
	}
}
void xoa(int vt){
	for(int i=vt;i<n;i++)
		a[i]=a[i+1];
	  n--;
}
void xoasoam(){
	int dem=0;
	for(int i=n-1;i>=0;i--)
	{	
		if(a[i]<0)
		{	dem = 1;	
			xoa(i);
			break;
		}
		
	}
	if (dem==0)
		printf("\nKhong co phan tu am de xoa");	
	else
		{printf(" \n Mang sau khi xoa la \n");
		xuat();
		}	
}
int main(){
	int x,k,vt;
	nhapn();
	nhap();
	printf(" \n Mang vua nhap mang la \n");
	xuat();
	int ex=ktr();
	if(ex==1)printf("\nday la mang dam dan ");
	else {
	printf("\nday khong la mang dam dan ");
	sapxep();
	printf("\nmang sau khi sap xep giam dan la : \n");
	xuat();
	}
	chenchan();
	printf(" \n Mang sau khi chen la \n");
	xuat();
	xoasoam();
	
}
