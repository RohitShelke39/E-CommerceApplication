from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest

# from app.models import Register
from app.models import users
from app.models import admin
from app.models import category
from app.models import sub_category
from app.models import product
from django.http import JsonResponse


# def display_name(request):
#     print(request.POST["name"])
#     print(request.POST["mobile"])
#     print(request.POST["email"])
#     return HttpResponse()

# def display_face(request):
#     print(request.POST["name"])
#     print(request.POST["email"])
#     print(request.POST["password"])
#     print(request.POST["mobile"])
#     print(request.POST["age"])
#     print(request.POST["dob"])
#     print(request.POST["gender"])
#     if Register.objects.filter(rg_email=request.POST["email"]).count():
#         return HttpResponse("10")
#     else:
#         Register.objects.create(
#             rg_name=request.POST["name"],
#             rg_email=request.POST["email"],
#             rg_password=request.POST["password"],
#             rg_mobile=request.POST["mobile"],
#             rg_age=request.POST["age"],
#             rg_gender=request.POST["gender"],
#         )
#     return HttpResponse("1")

# def display_facelogin(request):
#     print(request.POST["email"])
#     print(request.POST["password"])
#     if Register.objects.filter(rg_email=request.POST["email"]).count():

#         if Register.objects.filter(rg_password=request.POST["password"]).count():
#             return HttpResponse()
#         else:
#             return HttpResponse("0")
#     else:
#         return HttpResponse("0")
#     return HttpResponse()
# Create your views here.

# def getRegDetails(request):
#     regData = Register.objects.filter().values()
#     print(regData)
#     data = list(regData)
#     print(data)
#     data = JsonResponse(data, safe=False)
#     return data

# def index(request):
#     return render(request, 'index.html')

# def home(request):
#     return render(request, 'home.html')

# def aboutus(request):
#     return render(request, 'aboutus.html')

# def contact(request):
#     return render(request, 'contact.html')

# def facebooklogin(request):
#     return render(request, 'facebooklogin.html')

# def facebook(request):
#     return render(request, 'facebook.html')

# def reg_details(request):
#     return render(request, 'reg_details.html')

# def create_reg_details(request):
#     print(request.POST["name"])
#     print(request.POST["email"])
#     print(request.POST["password"])
#     print(request.POST["mobile"])

#     if Register.objects.filter(rg_email=request.POST["email"]).count():
#         return HttpResponse("10")
#     else:
#         Register.objects.create(
#             rg_name=request.POST["name"],
#             rg_email=request.POST["email"],
#             rg_password=request.POST["password"],
#             rg_mobile=request.POST["mobile"],
#         )
#     return HttpResponse("1")

# def update_reg_details(request):
    # Register.objects.filter(rg_id=request.POST["id1"]).update(
    #     rg_name=request.POST["name1"],
    #     rg_email=request.POST["email1"],
    #     rg_mobile=request.POST["mobile1"],
    # )
    # return HttpResponse()

# def delete_reg_details(request):
#     Register.objects.filter(rg_id=request.POST["id2"]).delete()
#     return HttpResponse()



# ONLINE SHOPPING 

# ADMIN

def aindex(request): 
    return render(request, 'admin/aindex.html')

def alogin(request): 
    return render(request, 'admin/alogin.html')

def orders(request): 
    return render(request, 'admin/orders.html')

def addproduct(request): 
    return render(request, 'admin/addproduct.html')

def admin_category(request): 
    return render(request, 'admin/category.html')

def fsubcategory(request): 
    return render(request, 'admin/fsubcategory.html')

def signup(request): 
    return render(request, 'admin/signup.html')

def settings(request): 
    return render(request, 'admin/settings.html')

def resetpassword(request): 
    return render(request, 'admin/resetpassword.html')

def help(request): 
    return render(request, 'admin/help.html')

# def save_user(request):
def save_admin(request):
    print(request.POST["name"])
    print(request.POST["email"])
    print(request.POST["mobile"])
    print(request.POST["password"])    
    if admin.objects.filter(admin_email=request.POST["email"]).count():
        return HttpResponse("10")
    else:
        admin.objects.create(
            admin_name=request.POST["name"],
            admin_email=request.POST["email"],
            admin_mobile=request.POST["mobile"],
            admin_password=request.POST["password"],            
       )
    return HttpResponse("1")

def login_admin(request):
    print(request.POST["email"])
    print(request.POST["password"])
    request.session['email'] = request.POST["email"];
    print(request.session['email'])
    if admin.objects.filter(admin_email=request.POST["email"]).count():

        if admin.objects.filter(admin_password=request.POST["password"]).count():
            return HttpResponse()
        else:
            return HttpResponse("0")
    else:
        return HttpResponse("0")
    return HttpResponse()


def add_category(request):
    print(request.POST["a_category"])
    # request.session['category'] = request.POST["category"];
    # print(request.session['email'])
    if category.objects.filter(ct_name=request.POST["a_category"]).count():
        return HttpResponse("10")
    else:
        category.objects.create(
            ct_name=request.POST["a_category"],        
       )
    return HttpResponse()

def getcategory(request):
    regData = category.objects.filter().values()
    print(regData)
    data = list(regData)
    print(data)
    data = JsonResponse(data, safe=False)
    return data

def getCategoryDetails(request):
    regData = category.objects.filter().values()
    print(regData)
    data = list(regData)
    print(data)
    data = JsonResponse(data, safe=False)
    return data

def add_subcategory(request):
    print(request.POST["a_subcategory"])
    # request.session['category'] = request.POST["category"];
    # print(request.session['email'])
    
    if sub_category.objects.filter(sc_name=request.POST["a_subcategory"]).count():
        return HttpResponse("10")
    else:
        sub_category.objects.create(
            sc_ct_name=request.POST["a_sc_category"],        
            sc_name=request.POST["a_subcategory"], 
       )
    return HttpResponse()

def getsubcategory(request):
    regData = category.objects.filter().values()
    print(regData)
    data = list(regData)
    print(data)
    data = JsonResponse(data, safe=False)
    return data

def update_subcategory(request):
    sub_category.objects.filter(sc_id=request.POST["edit_id"]).update(
        sc_ct_name=request.POST["selCategory1"],
        sc_name=request.POST["a_subcategory1"],
    )
    return HttpResponse()


def getSubcategoryDetails(request):
    regData = sub_category.objects.filter().values()
    print(regData)
    data = list(regData)
    print(data)
    data = JsonResponse(data, safe=False)
    return data
    

def add_product(request):
    print(request.POST["prodname"])
    # request.session['category'] = request.POST["category"];
    # print(request.session['email'])
    
    if product.objects.filter(pd_name=request.POST["prodname"]).count():
        return HttpResponse("10")
    else:
        product.objects.create(
            pd_category=request.POST["a_category"],        
            pd_sub_category=request.POST["a_subcategory"], 
            pd_name=request.POST["prodname"], 
            pd_description=request.POST["prodesc"], 
            pd_price=request.POST["prodprice"], 
            pd_image=request.FILES["prodimg"],
       )
    return HttpResponse()

def getproduct(request):
    regData = sub_category.objects.filter().values()
    print(regData)
    data = list(regData)
    print(data)
    data = JsonResponse(data, safe=False)
    return data


def getproductDetails(request):
    regData = product.objects.filter().values()
    print(regData)
    data = list(regData)
    print(data)
    data = JsonResponse(data, safe=False)
    return data

def update_product(request):
    product.objects.filter(pd_id=request.POST["edit_id"]).update(
        pd_category=request.POST["selCategory1"],
        pd_sub_category=request.POST["selSubCategory1"],
        pd_name=request.POST["prodname1"],
        pd_description=request.POST["proddesc1"],
        pd_price=request.POST["price1"],
        # pd_img=request.POST["img1"],
    )
    return HttpResponse()

# USER
def uindex(request):
    return render(request, 'user/uindex.html')

def men(request):
    return render(request, 'user/men.html')

def women(request):
    return render(request, 'user/women.html')

def mshirt(request):
    return render(request, 'user/mshirt.html')

def mhoodi(request):
    return render(request, 'user/mhoodi.html')

def mtshirt(request):
    return render(request, 'user/mtshirt.html')

def black(request):
    return render(request, 'user/black.html')

def brown(request):
    return render(request, 'user/brown.html')

def grey(request):
    return render(request, 'user/grey.html')

def smap(request):
    return render(request, 'user/smap.html')

def sprint(request):
    return render(request, 'user/sprint.html')

def strip(request):
    return render(request, 'user/strip.html')

def swblack(request):
    return render(request, 'user/swblack.html')

def swblue(request):
    return render(request, 'user/swblue.html')

def swgrey(request):
    return render(request, 'user/swgrey.html')

def kurta(request):
    return render(request, 'user/kurta.html')

def onepiece(request):
    return render(request, 'user/onepiece.html')

def wtshirt(request):
    return render(request, 'user/wtshirt.html')

def kurta1(request):
    return render(request, 'user/kurta1.html')

def kurta2(request):
    return render(request, 'user/kurta2.html')

def kurta3(request):
    return render(request, 'user/kurta3.html')

def onepiece1(request):
    return render(request, 'user/onepiece1.html')

def onepiece2(request):
    return render(request, 'user/onepiece2.html')

def onepiece3(request):
    return render(request, 'user/onepiece3.html')

def wtshirt1(request):
    return render(request, 'user/wtshirt1.html')

def wtshirt2(request):
    return render(request, 'user/wtshirt2.html')

def wtshirt3(request):
    return render(request, 'user/wtshirt3.html')

def login(request):
    return render(request, 'user/login.html')

def register(request):
    return render(request, 'user/register.html')

def my_account(request):
    return render(request, 'user/my_account.html')

def my_cart(request):
    return render(request, 'user/my_cart.html')

def checkout(request):
    if 'email' in request.session:
        return render(request, 'user/checkout.html')
    else:
        return render(request, 'user/login.html')

def order(request):
    return render(request, 'user/order.html')

def wishlist(request):
    return render(request, 'user/wishlist.html')

def save_user(request):
    print(request.POST["name"])
    print(request.POST["email"])
    print(request.POST["mobile"])
    print(request.POST["password"])    
    if users.objects.filter(us_email=request.POST["email"]).count():
        return HttpResponse("10")
    else:
        users.objects.create(
            us_name=request.POST["name"],
            us_email=request.POST["email"],
            us_mobile=request.POST["mobile"],
            us_password=request.POST["password"],            
       )
    return HttpResponse("1")

def login_user(request):
    print(request.POST["email"])
    print(request.POST["password"])
    request.session['email'] = request.POST["email"];
    print(request.session['email'])
    if users.objects.filter(us_email=request.POST["email"]).count():

        if users.objects.filter(us_password=request.POST["password"]).count():
            return HttpResponse()
        else:
            return HttpResponse("0")
    else:
        return HttpResponse("0")
    return HttpResponse()