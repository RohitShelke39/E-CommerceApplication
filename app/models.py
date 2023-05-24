from django.db import models
# from ecommerce.db import models


# Create your models here.


# class Register(models.Model):
#     rg_id = models.AutoField(primary_key=True, unique=True)
#     rg_name = models.CharField(max_length=100)
#     rg_email = models.CharField(max_length=100)
#     rg_password = models.CharField(max_length=100)
#     rg_mobile = models.CharField(max_length=100)
#     rg_age = models.CharField(max_length=100)
#     rg_gender = models.CharField(max_length=100)


class admin(models.Model):
    admin_id=models.AutoField(primary_key=True, unique=True)
    admin_name=models.CharField(max_length=40)
    admin_email=models.CharField(max_length=40)
    admin_mobile=models.CharField(max_length=40)
    admin_password=models.CharField(max_length=40)

class category(models.Model):
    ct_id=models.AutoField(primary_key=True, unique=True)
    ct_name=models.CharField(max_length=40)

class sub_category(models.Model):
    sc_id=models.AutoField(primary_key=True, unique=True)
    sc_ct_name=models.CharField(max_length=40)
    sc_name=models.CharField(max_length=40)

class product(models.Model):
    pd_id=models.AutoField(primary_key=True, unique=True)
    pd_name=models.CharField(max_length=40)
    pd_image=models.ImageField(upload_to='app/static/images')
    pd_category=models.CharField(max_length=40)
    pd_sub_category=models.CharField(max_length=40)
    pd_price=models.CharField(max_length=40)
    pd_description=models.CharField(max_length=40)

class purchase_products(models.Model):
    pp_id=models.AutoField(primary_key=True, unique=True)
    pp_or_id=models.CharField(max_length=40)
    pp_name=models.CharField(max_length=40)
    pp_image=models.ImageField(upload_to='app/static/images')
    pp_price=models.CharField(max_length=40)
    pp_quantity=models.CharField(max_length=40)


class users(models.Model):
    us_id=models.AutoField(primary_key=True, unique=True)
    us_name=models.CharField(max_length=40)
    us_email=models.CharField(max_length=40)
    us_mobile=models.CharField(max_length=40)
    us_password=models.CharField(max_length=40)
    us_address=models.CharField(max_length=40)


class cart(models.Model):
    ct_id=models.AutoField(primary_key=True, unique=True)
    ct_us_id=models.CharField(max_length=40)
    ct_pd_name=models.CharField(max_length=40)
    ct_pd_image=models.ImageField(upload_to='app/static/images')
    ct_quantity=models.CharField(max_length=40)
    ct_price=models.CharField(max_length=40)

class wish_list(models.Model):
    wl_id=models.AutoField(primary_key=True, unique=True)
    wl_us_id=models.CharField(max_length=40)
    wl_pd_name=models.CharField(max_length=40)
    wl_pd_image=models.ImageField(upload_to='app/static/images')
    wl_qty=models.CharField(max_length=40)
    wl_price=models.CharField(max_length=40)

class orders(models.Model):
    or_id=models.AutoField(primary_key=True, unique=True)
    or_us_id=models.CharField(max_length=40)
    or_amount=models.CharField(max_length=40)
    or_status=models.CharField(max_length=40)

    