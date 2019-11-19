def find_ternary(num):  #2
    quotient = num/3    #3
    remainder = num%3
    if quotient == 0:   #4
        return ""
    else:
        return find_ternary(int(quotient)) + str(int(remainder))    #5
 #1
def toDec (a, base):
    ans = 0                     # output sum
    inc = 1                     # incrementing number (what you multiply each digit by)
    while a:
        digit = inc * (a % 10)  # last digit of a times the incrementer
        ans += digit            # digit added to sum
        a //= 10                # cuts off the last digit of a (// is integer division in python 3.x)
        inc *= base             # base (2 for binary, 3 for ternary, etc)

    return (ans)

def height(nums):
    ternary_num=find_ternary(nums)
    arr=[0]*(len(ternary_num)+1)
    arr[0]=0
    n=len(arr)
    ans=''
    master_index_2=0
    for i in range(0,len(ternary_num)):
        arr[i+1]=ternary_num[i]
    for i in range(0,n):
        arr[i]=int(arr[i])
    for i in range(0,n):
        if(arr[i]==2):
            master_index_2=i
            while i<n:
                arr[i]=0
                i+=1
            break
    for i in range(master_index_2-1,-1,-1):
        if(arr[i]==0):
            arr[i]=1
            break
        else:
            arr[i]=0
    for i in arr:
        ans=ans+str(i)        
    return(int(ans))        
    
print(toDec(height(435465768709765432),3))    
