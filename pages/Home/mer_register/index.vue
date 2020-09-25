<template>
	<view class="{ tabCurrentIndex == '0' ? cHeight : ''}">
		
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">
				{{ item.text }}
			</view>
		</view>
		
		
		<view style="height: 100%" v-if="tabCurrentIndex == '0'">
			<view class="container2" style="flex:1" v-if="this.images">
				<swiper class="sw">
					<swiper-item><image mode="aspectFit" @longpress="downloadImg(images)" :src=images class="img"></image></swiper-item>
				</swiper>
				<button>长按图片保存</button>
			</view>
			
			<view style="height: 100%;  display: flex; justify-content: center;align-items: center; background-color: #f5f5f5;" v-if="!this.images">
				<image src="/static/public/no-data.jpeg" mode="widthFix"></image>
			</view>
			
			<view class="cu-load load-modal" v-if="loadModal.show">
			   <image src="/static/public/loading.png" mode="aspectFit"></image>
			   <view class="gray-text">{{ loadModal.text }}</view>
			</view>
		</view>
		
		
		<view v-if="tabCurrentIndex == '1'">
			<view class="type-form">
				<view class="type-form-title">请选择商户类型</view>
				<view class="type-form-bg">
					<radio-group name="" class="radio-group-block" @change="typeChange">
						<view class="left-radio-group">
							<radio class='red radio' :class="merTypeRadio=='2'?'checked':''" value="2"></radio>
							<text>小微商户</text>
						</view>
						<view class="left-radio-group">
							<radio class='red radio' :class="merTypeRadio=='0'?'checked':''" value="0"></radio>
							<text class="">企业（有营业执照）</text>
						</view>
						<view class="left-radio-group">
							<radio class='red radio' :class="merTypeRadio=='1'?'checked':''" value="1"></radio>
							<text class="">个体户（有营业执照）</text>
						</view>
					</radio-group>
				</view>
				
				<view class="type-form-title">商户基础信息</view>
				<view class="cu-list menu sm-border type-form-bg">
					<view class="cu-item arrow">
						<view class="content">
							<!-- <text class="required-tag">*</text> -->
							<text class="text-grey group-left-title">商户类别(大)</text>
						</view>
						<view class="action">
							<picker @change="bigTypeChange" :range="bigType" :range-key="'name'">
								<view class="picker" :class="bigIndex > -1 ? 'font-bold' : ''">
									{{ bigIndex > -1 ? bigType[bigIndex].name : '选择商户类型' }}
								</view>
							</picker>
						</view>
					</view>

					<view class="cu-item arrow">
						<view class="content">
							<!-- <text class="required-tag">*</text> -->
							<text class="text-grey group-left-title">商户类别(小)</text>
						</view>
						<view class="action">
							<picker @change="mccChange" :range="MccList" :range-key="'name'">
								<view class="picker" :class="mccIndex > -1 ? 'font-bold' : ''">
									{{ mccIndex > -1 ? MccList[mccIndex].name : '选择商户详细分类' }}
								</view>
							</picker>
						</view>
					</view>	
					
					<view class="cu-item">
						<view class="content">
							<text class="text-grey group-left-title">商户地址</text>
						</view>
						<view class="action">
							<view class="action-place">
								<picker @change="ProvinceChange" :range="provinceList" :range-key="'province'">
									<view class="picker" :class="provinceIndex > -1 ? 'font-bold' : ''">
										{{provinceIndex >-1 ? provinceList[provinceIndex].province: '选择省' }}
									</view>
								</picker>
							</view>
							<view class="action-place">
								<picker @change="CityChange" :range="cityList" :range-key="'city'">
									<view class="picker" :class="cityIndex > -1 ? 'font-bold' : ''">
										{{cityIndex >-1 ? cityList[cityIndex].city : '选择市' }}
									</view>
								</picker>
							</view>
							<view class="action-place">
								<picker @change="AreaChange" :range="areaList" :range-key="'area'">
									<view class="picker" :class="areaIndex > -1 ? 'font-bold' : ''">
										{{areaIndex > -1 ? areaList[areaIndex].area : '选择区' }}
									</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="content">
							<text class="text-grey group-left-title">详细地址</text>
						</view>
						<view class="action">
							<input type="text" v-model="address" class="type-form-input" placeholder-style="color: #999; font-size: 28rpx;" placeholder="请输入详细地址" />
						</view>
					</view>
				</view>
				
				<view class="type-form-foot">
					
				</view>
			</view>
			
			<view class="type-foot">
				<view class="flex flex-direction">
					<button class="cu-btn margin-tb-sm lg" @click="nestStep()">下一步</button>
				</view>
			</view>
			
			<view class="cu-load load-modal" v-if="loadModal.show">
			   <image src="/static/public/loading.png" mode="aspectFit"></image>
			   <view class="gray-text">{{ loadModal.text }}</view>
			</view>
		</view>
		
		
		

	</view>
</template>

<script>
import net from '@/common/net.js';

export default {
	data() {
		return {
			loadModal: { show: false, text: '加载中...' },

			images: "images",
			data: true,
			
			tabCurrentIndex: 0,
			navList: [
				{
					state: 0,
					text: '自主注册',
				},
				{
					state: 1,
					text: '代理注册',
				}
			],
			
			// 商户类型 默认小微商户
			merTypeRadio: 2,
			
			bigType: [],
			bigCode: 0,
			bigIndex: -1,
			
			MccList: [],
			MccCode: 0,
			mccIndex: -1,
			
			provinceIndex: -1,
			provinceList: [],
			
			cityIndex: -1,
			cityList: [],
			
			areaIndex: -1,
			areaList: [],
			
			regionCode: '',
			
			address:"",
		};
	},
	
	onLoad() {
		this.loadModal.show = true;
		
		this.getMerchantPic();
		/**
		 * 获取大分类
		 */
		this.getBigMcc();
		
		this.getProvince();
	},
	
	methods: {
		/**
		 * @param 商户类型选择
		 */
		typeChange(e){
			this.merTypeRadio = e.detail.value;
		},
		
		/**
		 * 
		 */
		//顶部tab点击
		tabClick(index) {
			this.tabCurrentIndex = index;
		},


		/**
		 * 获取所有省份
		 */
		getProvince(){
	    	net({ url:"/V1/province", method:'get',
	            success: (res) => {
					if (res.data.success && res.data.success.data) {
						this.provinceList = res.data.success.data;
					}else 
						uni.showToast({ title: res.data.error.message, icon: 'none' });
					this.loadModal.show = false;
	            }
	      	})
		},
		
		/**
		 * @param {Object} 选择省
		 */
		ProvinceChange(e) {
			this.provinceIndex = e.detail.value
			let province_code  = this.provinceList[this.provinceIndex].province_code
			this.cityIndex =  -1;
			this.areaIndex =  -1;
	    	net({ url:"/V1/city", method:'get', data: {province_code: province_code},
	            success: (res) => {
					if (res.data.success && res.data.success.data)
						this.cityList = res.data.success.data;
					else 
						uni.showToast({ title: res.data.error.message, icon: 'none' });
	            }
	      	})
		},
		
		/**
		 * @param {Object} 选择市
		 */
		CityChange(e) {
			this.cityIndex = e.detail.value
			let city_code = this.cityList[this.cityIndex].city_code
			this.areaIndex =  -1;
			net({ url:"/V1/area", method:'get', data: {city_code: city_code},
	            success: (res) => {
					if (res.data.success && res.data.success.data)
						this.areaList = res.data.success.data;
					else 
						uni.showToast({ title: res.data.error.message, icon: 'none' });
	            }
	      	})
		},
		
		/**
		 * @param {Object} 选择县
		 */
		AreaChange(e) {
			this.areaIndex = e.detail.value
			this.regionCode = this.areaList[this.areaIndex].area_code
		},

		/**
		 * @version 获取商户类型的大分类
		 */
		getBigMcc(){
			net({ url:"/V1/bigMcc", method:'get',
	            success: (res) => {
					if (res.data.success && res.data.success.data) {
						this.bigType = res.data.success.data
					}else 
						uni.showToast({ title: res.data.error.message, icon: 'none' });
					this.loadModal.show = false;
	            }
	      	})
		},
		
		/**
		 * @ver 商户大分类选择
		 */
		bigTypeChange(e) {
			this.bigIndex = e.detail.value
			this.bigCode = this.bigType[this.bigIndex].big_type_code
			this.mccIndex= -1;
			this.MccCode = 0;
			this.getMcc()
		},

		/**
		 * @version 获取小分类
		 */
		getMcc(code){
	    	net({ url:"/V1/mcc", method:'get', data:{big: this.bigCode},
	            success: (res) => {
					this.loadModal.show = false;
					if (res.data.success && res.data.success.data) {
						this.MccList = res.data.success.data
					}else 
						uni.showToast({ title: res.data.error.message, icon: 'none' });
	            }
	      	})
		},
		
		/**
		 * @param {Object} 小分类选择
		 */
		mccChange(e){
			console.log(e.detail.value)
			this.mccIndex = e.detail.value
			this.MccCode  = this.MccList[this.mccIndex].id
		},
		
		/**
		 * 下一步
		 */
		nestStep(){
			if(this.MccCode == 0  || !this.MccCode){
				uni.showToast({ title: '请选择商户类别', icon: 'none' });
				return false;
			}
			
			if(this.regionCode == '' || !this.regionCode){
				uni.showToast({ title: '请选择商户地址', icon: 'none' });
				return false;	
			}
			
			if(this.address == '' || !this.address){
				uni.showToast({ title: '请填写详细地址', icon: 'none' });
				return false;	
			}
			
			uni.navigateTo({
				url: 'More?type='+this.merTypeRadio+'&mcc='+this.MccCode+'&address='+this.address+"&regionCode="+this.regionCode
			})
		},
		
		// 获取分享图
		getMerchantPic(){
	    	net({ url:"/V1/mach_share", method:'get',
	            success: (res) => {
					this.loadModal.show = false;
					if (res.data.success && res.data.success.data.link) { 
						this.images = res.data.success.data.link;
					} else {
						this.images = null
						uni.showToast({ title: res.data.error.message, icon: 'none', position: 'bottom'})
					}
	            }
	      	})
		},
	},
};
</script>


<style lang="scss">
@import 'style/index.scss';
</style>