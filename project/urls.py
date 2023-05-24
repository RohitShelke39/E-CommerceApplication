"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))

"""
from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('home/', views.home),
    # path('contact/', views.contact),
    # path('aboutus/', views.aboutus),
    # path('display_name/', views.display_name),
    # path('facebooklogin/', views.facebooklogin),
    # path('display_face/', views.display_face),
    # path('facebook/', views.facebook),
    # path('display_facelogin/', views.display_facelogin),
    # # path("login.html/", views.loginPage),
    # path('reg_details/', views.reg_details),
    # path('display_regdetails/', views.getRegDetails),
    # path('update_reg_details/', views.update_reg_details),
    # path('create_reg_details/', views.create_reg_details),
    # path('delete_reg_details/', views.delete_reg_details),


    # ONLINE SHOPPING


    # ADMIN
    path('aindex/',views.aindex),
    path('alogin/',views.alogin),
    path('orders/',views.orders),
    path('category/',views.admin_category),
    path('addproduct/',views.addproduct),
    path('fsubcategory/',views.fsubcategory),
    path('signup/',views.signup),
    path('settings/',views.settings),
    path('resetpassword/',views.resetpassword),
    path('help/',views.help),  
    path('save_admin/', views.save_admin),
    path('login_admin/', views.login_admin),
    path('add_category/', views.add_category),
    path('display_category/', views.getcategory),
    path('display_CategoryDetails/',views.getCategoryDetails),
    path('add_subcategory/', views.add_subcategory),
    path('display_subcategory/', views.getsubcategory), 
    path('display_SubcategoryDetails/', views.getSubcategoryDetails),
    path('update_subcategory/', views.update_subcategory), 
    path('add_product/', views.add_product),
    path('display_product/', views.getproduct),
    path('display_productDetails/', views.getproductDetails),
    path('update_product/', views.update_product), 


    # path('display_update/', views.getRowsUpdate),
    # path('display_delete/', views.getRowsDelete),



    # USER
    path('uindex/', views.uindex),
    path('men/', views.men),
    path('women/', views.women),
    path('mshirt/', views.mshirt),
    path('mhoodi/', views.mhoodi),
    path('mtshirt/', views.mtshirt),
    path('black/', views.black),
    path('brown/', views.brown),
    path('grey/', views.grey),
    path('smap/', views.smap),
    path('sprint/', views.sprint),
    path('strip/', views.strip),
    path('swblack/', views.swblack),
    path('swblue/', views.swblue),
    path('swgrey/', views.swgrey),
    path('kurta/', views.kurta),
    path('onepiece/', views.onepiece),
    path('wtshirt/', views.wtshirt),
    path('kurta/', views.kurta),
    path('kurta1/', views.kurta1),
    path('kurta2/', views.kurta2),
    path('kurta3/', views.kurta3),
    path('onepiece1/', views.onepiece1),
    path('onepiece2/', views.onepiece2),
    path('onepiece3/', views.onepiece3),
    path('wtshirt1/', views.wtshirt1),
    path('wtshirt2/', views.wtshirt2),
    path('wtshirt3/', views.wtshirt3),
    path('login/', views.login),
    path('register/', views.register),
    path('my_account/', views.my_account),
    path('my_cart/', views.my_cart),
    path('checkout/', views.checkout),
    path('order/', views.order),
    path('wishlist/', views.wishlist),
    path('save_user/', views.save_user),
    path('login_user/',views.login_user),
    # path('save_admin/', views.save_user),


]