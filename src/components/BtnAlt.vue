<template>
    <div class="btn-alt">
        <slot></slot>

        <svg class="btn-alt__arrow" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3069 0.411408C10.0312 0.178672 9.64063 0.20557 9.39155 0.491471L9.32364 0.581765C9.11999 0.896852 9.14353 1.34322 9.39369 1.62789L13.8317 6.67724H1.44958L1.35418 6.68458C1.01098 6.73779 0.74646 7.07399 0.74646 7.48081C0.74646 7.92461 1.06126 8.28438 1.44958 8.28438H13.863L9.39373 13.3708L9.32548 13.4607C9.12062 13.7748 9.14244 14.2213 9.39151 14.5072C9.66548 14.8217 10.1107 14.8228 10.3859 14.5097L16.0465 8.06937L16.1149 7.97913C16.3203 7.66405 16.2975 7.216 16.0465 6.93045L10.3859 0.489019L10.3069 0.411408Z" fill="#E94146"/>
        </svg>
    </div>
</template>

<style scoped lang="scss">
    .btn-alt{
        margin-top: 40px;
        font-family: $parafont;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 19.12px;
        letter-spacing: 1.3px;
        font-weight: 800;
        color: $secondary;
        display: flex;
        align-items: center;
        &__arrow{
            margin-left: 20px;
            transition : transform 0.3s ease;
        }
        &:hover{
            .btn-alt__arrow{
                transform: translateX(10px);
            }
        }
    }
</style>